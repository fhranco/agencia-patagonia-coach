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

if (empty($user_message)) {
    echo json_encode(['error' => 'No message provided']);
    exit;
}

// Cargar conocimiento desde el archivo externo
$knowledge_file = 'ai_knowledge.txt';
$ai_memory = file_exists($knowledge_file) ? file_get_contents($knowledge_file) : "Eres un asistente de PatagoniaCoach.";

$system_prompt = "Instrucciones principales:\n" . $ai_memory . "\n\nREGLA DE VIDA O MUERTE: Responde con MÁXIMO 10 PALABRAS. NUNCA digas quien eres. NUNCA menciones a PatagoniaCoach a menos que pregunten. Responde como un socio ocupado. Si saludan, responde: '¿Qué escalamos hoy?'. Si preguntan qué haces: 'IA y marketing de élite. Haz el diagnóstico.'. NADA MÁS.";

$data = [
    'model' => 'deepseek-chat',
    'messages' => [
        ['role' => 'system', 'content' => $system_prompt],
        ['role' => 'user', 'content' => $user_message]
    ],
    'stream' => false
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
        echo json_encode(['reply' => $reply]);
    }
}

curl_close($ch);
?>
