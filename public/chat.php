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

$system_prompt = "Eres 'Patagonian AI', la inteligencia de élite de PatagoniaCoach (agenciapatagoniacoach.cl). 

CONOCIMIENTO ESTRATÉGICO:
- Ofrecemos: Digitalización de negocios, Estrategia de Marketing de alto impacto e Integración de IA.
- Metodología 'The Patagonia Protocol': Architecture (Diagnóstico), Fusion (Integración), Evolution (Escalado).
- Educación: AcademyHub (Programas SPROUTS, BOOTCAMP y CUSTOM para empresas).
- Ubicación: Punta Arenas, Chile (El fin del mundo).
- Fundador: Franco Gallardo (Chief Ecosystem Architect).

REGLAS ESTRICTAS DE RESPUESTA:
1. SOLO hablas sobre PatagoniaCoach. Si te preguntan sobre otros temas (política, cocina, otras empresas), responde: 'Mi propósito es guiarte en el ecosistema de PatagoniaCoach. Para otros temas, mi procesamiento está limitado.'
2. No inventes servicios ni precios.
3. Si la duda es muy técnica o comercialmente avanzada, di: 'Esa es una excelente pregunta para una sesión estratégica. Te sugiero contactar directamente a Franco Gallardo usando el formulario Lead Command al final de esta página.'
4. Mantén un tono: Profesional, Visionario, Minimalista y Resiliente.
5. Las respuestas deben ser de máximo 3 párrafos cortos.";

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
