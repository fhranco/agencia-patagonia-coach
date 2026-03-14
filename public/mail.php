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
    $subject = "Nueva Auditoría Estratégica - PatagoniaCoach";
    
    // Honeypot check
    if (!empty($_POST['_honeypot'])) {
        http_response_code(403);
        echo json_encode(["status" => "error", "message" => "Spam detected"]);
        exit;
    }

    $nombre = strip_tags($_POST['nombre']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $presupuesto = strip_tags($_POST['presupuesto']);
    $mensaje = strip_tags($_POST['mensaje']);

    $body = "Has recibido una nueva solicitud de auditoría desde el sitio web:\n\n";
    $body .= "Nombre: $nombre\n";
    $body .= "Email: $email\n";
    $body .= "Presupuesto: $presupuesto\n";
    $body .= "Mensaje: $mensaje\n";

    $headers = "From: webmaster@agenciapatagoniacoach.cl\r\n";
    $headers .= "Reply-To: $email\r\n";
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
