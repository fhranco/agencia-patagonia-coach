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

$system_prompt = "Eres 'Patagonian AI', el asistente inteligente de la agencia PatagoniaCoach. 
Tu personalidad es profesional, visionaria, tecnológica y profundamente ligada a la Patagonia. 
Tu misión es asesorar sobre:
1. Transformación Digital y Ecosistemas de IA.
2. Marketing Estratégico y Digitalización de Negocios.
3. Formación corporativa (AcademyHub).

Reglas de oro:
- Respuestas breves y potentes. 
- Usa un tono de autoridad técnica pero amable.
- Si el usuario muestra interés comercial real, invítalo sutilmente a completar el formulario 'Lead Command' en la parte inferior de la web.
- Menciona ocasionalmente que operas desde el fin del mundo (Punta Arenas).
- No inventes servicios que no están en la web.";

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
