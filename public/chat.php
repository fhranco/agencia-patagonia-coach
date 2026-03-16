<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// --- CONFIGURACIÓN ---
// REEMPLAZA ESTO CON TU API KEY DE DEEPSEEK
$api_key = 'sk-3f814a317d084769817d8185fca30fb4'; 

$input = json_decode(file_get_contents('php://input'), true);
$user_message = $input['message'] ?? '';
$history = $input['history'] ?? [];

if ($user_message === '') {
    echo json_encode(['error' => 'No message provided']);
    exit;
}

// Cargar conocimiento
$knowledge_file = 'ai_knowledge.txt';
$ai_memory = file_exists($knowledge_file) ? file_get_contents($knowledge_file) : "Eres un asistente de PatagoniaCoach.";

// --- LÓGICA DE MEMORIA POR WHATSAPP ---
$identified_name = "";
// Si el mensaje actual tiene un número de WhatsApp, buscamos quién es
if (preg_match('/[0-9]{7,}/', $user_message, $matches)) {
    $found_wa = $matches[0];
    if (file_exists('chat_audit.log')) {
        $log_content = file_get_contents('chat_audit.log');
        // Buscar el último bloque donde aparezca este WhatsApp y tratar de extraer el nombre
        // Esta es una búsqueda simple en el log de auditoría
        if (preg_match_all('/\[USER\]: (.*?)\n.*?' . $found_wa . '/s', $log_content, $name_matches)) {
            $identified_name = end($name_matches[1]);
        }
    }
}

// Identidad Patagonian AI - Inteligente y Ejecutiva
$system_prompt = "Eres Patagonian AI, consultor de élite en PatagoniaCoach.
OBJETIVO: Resolver dudas rápido y cerrar contacto (+56995684198).

REGLAS DE ORO:
1. MEMORIA: Lee el historial. Si ya tienes el nombre o WhatsApp, úsalos. No los pidas dos veces.
2. VALOR: Si preguntan algo, responde con autoridad antes de sugerir el contacto con Franco.
3. BREVEDAD: Máximo 25 palabras. No des sermones, da soluciones.
4. CIERRE: Si detectas que ya diste la info, pregunta si hay algo más o despídete amablemente.";

if (!empty($identified_name)) {
    $system_prompt .= "\nRECONOCIMIENTO: El usuario es $identified_name según registros.";
}

$messages = [['role' => 'system', 'content' => $system_prompt]];

// Añadir historial enviado desde el frontend
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
        
        // --- LOGICA DE REGISTRO DE LEADS E HISTORIAL ---
        $full_chat_log = "";
        foreach ($messages as $m) {
            $role_display = ($m['role'] === 'system') ? 'SYS' : strtoupper($m['role']);
            $full_chat_log .= "[$role_display]: " . $m['content'] . "\n";
        }
        $full_chat_log .= "[BOT]: " . $reply;

        // Registro de Leads
        if (preg_match('/[0-9]{7,}/', $user_message)) {
            $file = 'chat_leads_history.csv';
            $date = date('Y-m-d H:i:s');
            $line = "\"$date\", \"Detectado\", \"$user_message\", \"Chat AI History\"\n";
            file_put_contents($file, $line, FILE_APPEND);
            
            $to = "contacto@agenciapatagoniacoach.cl";
            $subject = "🔥 LEADS DETECTADO EN CHAT";
            $body = "Se ha detectado actividad de contacto:\n\n" . $full_chat_log;
            $headers = "From: no-reply@agenciapatagoniacoach.cl";
            mail($to, $subject, $body, $headers);
        }

        // Auditoría Perpetua
        file_put_contents('chat_audit.log', "\n--- SESSION " . date('Y-m-d H:i:s') . " ---\n" . $full_chat_log . "\n", FILE_APPEND);

        echo json_encode(['reply' => $reply]);
    }
}

curl_close($ch);
?>
