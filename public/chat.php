<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit;
}

$secrets = file_exists(__DIR__ . '/secrets.php') ? require __DIR__ . '/secrets.php' : [];

$api_key = $secrets['deepseek_key_chat'] ?? ($_ENV['DEEPSEEK_KEY_CHAT'] ?? '');

$input = json_decode(file_get_contents('php://input'), true);
$user_message = $input['message'] ?? '';
$history = $input['history'] ?? [];

if ($user_message === '') {
    echo json_encode(['error' => 'No message provided']);
    exit;
}

$knowledge_file = __DIR__ . '/ai_knowledge.txt';
$ai_memory = file_exists($knowledge_file) ? file_get_contents($knowledge_file) : "Eres un asistente de PatagoniaCoach.";

$identified_name = "";
if (preg_match('/[0-9]{7,}/', $user_message, $matches)) {
    $found_wa = $matches[0];
    $audit_log = __DIR__ . '/chat_audit.log';
    if (file_exists($audit_log)) {
        $log_content = file_get_contents($audit_log);
        if (preg_match_all('/\[USER\]: (.*?)\n.*?' . $found_wa . '/s', $log_content, $name_matches)) {
            $identified_name = end($name_matches[1]);
        }
    }
}

$system_prompt = "Eres Patagonian AI, la inteligencia de PatagoniaCoach. 
TU SOCIO: Franco Gallardo.
CONTACTO: " . ($secrets['whatsapp'] ?? '+56995684198') . "

REGLAS DE ORO:
1. NO SEAS UN DISCO RAYADO: Varía tus saludos y respuestas. No uses siempre la misma frase de 'tu sitio captura leads'.
2. MEMORIA: Si el nombre o WhatsApp ya están en el chat, ÚSALOS pero no los vuelvas a pedir.
3. CONSULTORÍA: Si te saludan, saluda y pregunta qué negocio tienen. Si preguntan algo, responde con valor.
4. CIERRE: Sugiere hablar con Franco (" . ($secrets['whatsapp'] ?? '+56995684198') . ") solo cuando haya interés real o necesites datos.
5. BREVEDAD: Máximo 20 palabras. Sé directo y elegante.

CONOCIMIENTO BASE:
$ai_memory";

if (!empty($identified_name)) {
    $system_prompt .= "\nRECONOCIMIENTO: El usuario es $identified_name según registros.";
}

$messages = [['role' => 'system', 'content' => $system_prompt]];

foreach ($history as $msg) {
    if (isset($msg['role']) && isset($msg['content'])) {
        $role = ($msg['role'] === 'bot' || $msg['role'] === 'assistant') ? 'assistant' : 'user';
        $messages[] = ['role' => $role, 'content' => $msg['content']];
    }
}

$messages[] = ['role' => 'user', 'content' => $user_message];

$data = [
    'model' => 'deepseek-chat',
    'messages' => $messages,
    'stream' => false,
    'max_tokens' => 150
];

$ch = curl_init('https://api.deepseek.com/v1/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo json_encode(['error' => 'Curl error: ' . curl_error($ch)]);
} else {
    if ($http_code !== 200) {
        error_log("DeepSeek API Error: " . $response);
        echo json_encode(['error' => 'API Error', 'status' => $http_code]);
    } else {
        $result = json_decode($response, true);
        $reply = $result['choices'][0]['message']['content'] ?? 'Lo siento, tuve un problema procesando eso.';
        
        $full_chat_log = "";
        foreach ($messages as $m) {
            $role_display = ($m['role'] === 'system') ? 'SYS' : strtoupper($m['role']);
            $full_chat_log .= "[$role_display]: " . $m['content'] . "\n";
        }
        $full_chat_log .= "[BOT]: " . $reply;

        if (preg_match('/[0-9]{7,}/', $user_message)) {
            $leads_file = __DIR__ . '/chat_leads_history.csv';
            $date = date('Y-m-d H:i:s');
            $line = "\"$date\", \"Detectado\", \"$user_message\", \"Chat AI History\"\n";
            file_put_contents($leads_file, $line, FILE_APPEND);
            
            $to = $secrets['contact_email'] ?? 'contacto@agenciapatagoniacoach.cl';
            $subject = "🔥 LEADS DETECTADO EN CHAT";
            $body = "Se ha detectado actividad de contacto:\n\n" . $full_chat_log;
            $headers = "From: " . ($secrets['site_email'] ?? 'no-reply@agenciapatagoniacoach.cl');
            mail($to, $subject, $body, $headers);
        }

        file_put_contents(__DIR__ . '/chat_audit.log', "\n--- SESSION " . date('Y-m-d H:i:s') . " ---\n" . $full_chat_log . "\n", FILE_APPEND);

        echo json_encode(['reply' => $reply]);
    }
}

curl_close($ch);
