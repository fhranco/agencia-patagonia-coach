<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "contacto@agenciapatagoniacoach.cl";
    
    // Honeypot check
    if (!empty($_POST['_honeypot'])) {
        http_response_code(403);
        echo json_encode(["status" => "error", "message" => "Spam detected"]);
        exit;
    }

    $nombre = strip_tags($_POST['nombre'] ?? 'Sin nombre');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $whatsapp = strip_tags($_POST['whatsapp'] ?? 'No provisto');
    $type = $_POST['form_type'] ?? 'Lead General';
    
    $subject = "Nuevo Lead: $type - $nombre";

    $body = "Has recibido una nueva entrada desde el sitio web ($type):\n\n";
    $body .= "Nombre: $nombre\n";
    
    if ($email) $body .= "Email: $email\n";
    if ($whatsapp) $body .= "WhatsApp: $whatsapp\n";
    
    if (isset($_POST['presupuesto'])) {
        $body .= "Presupuesto: " . strip_tags($_POST['presupuesto']) . "\n";
    }
    
    if (isset($_POST['score'])) {
        $body .= "Puntaje Diagnóstico: " . strip_tags($_POST['score']) . "/300\n";
    }

    if (isset($_POST['mensaje'])) {
        $body .= "Mensaje/Desafío: " . strip_tags($_POST['mensaje']) . "\n";
    }

    $headers = "From: webmaster@agenciapatagoniacoach.cl\r\n";
    if ($email) {
        $headers .= "Reply-To: $email\r\n";
    }
    $headers .= "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email enviado correctamente"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error al enviar el email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>

