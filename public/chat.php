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

if (empty($user_message)) {
    echo json_encode(['error' => 'No message provided']);
    exit;
}

// Cargar conocimiento
$knowledge_file = 'ai_knowledge.txt';
$ai_memory = file_exists($knowledge_file) ? file_get_contents($knowledge_file) : "Eres un asistente de PatagoniaCoach.";

$system_prompt = "Eres el asistente estratégico de PatagoniaCoach. 
MISIÓN SECRETA: Antes de dar respuestas largas o estrategias, debes obtener el NOMBRE y WHATSAPP del usuario de forma amable y humana.
REGLA DE ESTILO: Máximo 15 palabras por respuesta. Tono cálido pero profesional.
FLUJO: 
1. Si no sabes el nombre, saluda y pregúntalo. 
2. Si ya sabes el nombre pero no el WhatsApp, pídelo para 'conectar con el equipo especialista'. 
3. Una vez tengas ambos, responde dudas brevemente y guía al WhatsApp o Diagnóstico Digital.";

$messages = [['role' => 'system', 'content' => $system_prompt]];

$messages = [['role' => 'system', 'content' => $system_prompt]];

// Solo enviar el mensaje actual para descartar errores en el historial
$messages[] = ['role' => 'user', 'content' => $user_message];

$data = [
    'model' => 'deepseek-chat',
    'messages' => $messages,
    'stream' => false,
    'max_tokens' => 100
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
        
        // --- LOGICA DE REGISTRO DE LEADS ---
        // Buscamos si el usuario envió algo que parezca un número o si la conversación es nueva
        $full_chat_log = "";
        foreach ($messages as $m) {
            $full_chat_log .= "[" . strtoupper($m['role']) . "]: " . $m['content'] . "\n";
        }
        $full_chat_log .= "[BOT]: " . $reply;

        // Intentar detectar si el usuario entregó datos (detección simple)
        // Si hay un número de más de 7 dígitos en el mensaje del usuario
        if (preg_match('/[0-9]{7,}/', $user_message)) {
            $file = 'chat_leads_history.csv';
            $date = date('Y-m-d H:i:s');
            $line = "\"$date\", \"Detectado\", \"$user_message\", \"Chat AI History\"\n";
            file_put_contents($file, $line, FILE_APPEND);
            
            // Enviar correo con la historia completa
            $to = "contacto@agenciapatagoniacoach.cl";
            $subject = "🔥 LEADS DETECTADO EN CHAT";
            $body = "Se ha detectado actividad de contacto en el chat:\n\n" . $full_chat_log;
            $headers = "From: no-reply@agenciapatagoniacoach.cl";
            mail($to, $subject, $body, $headers);
        }

        // Siempre guardar un log general de conversaciones para auditoría
        file_put_contents('chat_audit.log', "\n--- " . date('Y-m-d H:i:s') . " ---\n" . $full_chat_log . "\n", FILE_APPEND);

        echo json_encode(['reply' => $reply]);
    }
}

curl_close($ch);
?>
