<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$secrets = file_exists(__DIR__ . '/../secrets.php') ? require __DIR__ . '/../secrets.php' : [];

$DEEPSEEK_API_KEY = $secrets['deepseek_key_api'] ?? ($_ENV['DEEPSEEK_KEY_API'] ?? '');
$ADMIN_EMAIL = $secrets['admin_email'] ?? 'agente@agenciapatagoniacoach.cl';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$action = $input['action'] ?? 'chat';

if ($action === 'chat') {
    $messages = $input['messages'] ?? [];
    
    $systemPrompt = "Eres Franco Gallardo. Tono: Limpio, orgánico, respuestas MUY breves (máximo 2 líneas). Tu rol: Escuchar y tomar nota. No pidas correo. Tu misión es obtener sutilmente el NOMBRE y WHATSAPP del cliente durante el flujo para contactarlo. Usa frases como 'Tomo nota de este reto', 'Perfecto, recopilo la información'. Una vez tengas el interés, di algo como: 'Para que hablemos directo por WhatsApp, dime tu nombre y contacto'. Tras unas 5 interacciones, ofrece el cierre: 'Tengo los puntos clave. Si quieres apurar, agenda aquí: https://calendar.app.google/cGwL5PTzWbdx7XAz8'. Al final da las gracias. Ahorra tokens, sé humano.";
    
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

    $headers = "From: " . ($secrets['site_email'] ?? 'no-reply@agenciapatagoniacoach.cl') . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($ADMIN_EMAIL, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Lead entregado"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Fallo en el servidor de correo"]);
    }
}
