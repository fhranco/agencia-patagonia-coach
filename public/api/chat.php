<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// CONFIGURACIÓN DE MAESTRÍA
$DEEPSEEK_API_KEY = "sk-ed136a677ecd41e7b8a12de0efe2aecf";
$ADMIN_EMAIL = "agente@agenciapatagoniacoach.cl";

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$action = $input['action'] ?? 'chat';

if ($action === 'chat') {
    $messages = $input['messages'] ?? [];
    
    // System Prompt de Maestría Orgánica (Estilo Franco Gallardo)
    $systemPrompt = "Eres Franco Gallardo (o su alter ego digital de PatagoniaCoach). Tono: Limpio, asertivo, orgánico y MUY breve. Nada de introducciones largas ni 'párrafos de IA'. Habla como un consultor elite que valora el tiempo. Tu misión: Asesorar sobre Diseño Web, IA y Redes (proyectos 2026 como Marcela Cruz, BoostPatagonia, Servisegpuq). Objetivo CRÍTICO: Obtener Nombre, WhatsApp/Teléfono y Correo. Si el usuario muestra interés, di algo como: 'Para darte una hoja de ruta real, pásame tu WhatsApp o correo y te contacto personalmente'. Ahorra tokens, sé directo.";
    
    array_unshift($messages, ["role" => "system", "content" => $systemPrompt]);

    $data = [
        "model" => "deepseek-chat",
        "messages" => $messages,
        "temperature" => 0.7
    ];

    $ch = curl_init("https://api.deepseek.com/v1/chat/completions");
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "Authorization: Bearer $DEEPSEEK_API_KEY"
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
} 

if ($action === 'lead') {
    $name = $input['name'] ?? 'Prospecto';
    $email = $input['email'] ?? 'No provisto';
    $message = $input['message'] ?? 'Sin mensaje';
    $context = $input['context'] ?? 'Sin contexto de charla';

    $subject = "🚨 NUEVO LEAD DE MAESTRÍA: $name";
    $body = "Has recibido un nuevo prospecto de alta intención:\n\n";
    $body .= "Nombre: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mensaje: $message\n\n";
    $body .= "Resumen del Chat:\n$context\n\n";
    $body .= "--- PatagoniaCoach Lead Commander ---";

    $headers = "From: no-reply@agenciapatagoniacoach.cl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($ADMIN_EMAIL, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Lead entregado"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Fallo en el servidor de correo"]);
    }
}
?>
