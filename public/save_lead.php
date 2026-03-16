<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$input = json_decode(file_get_contents('php://input'), true);
$nombre = $input['nombre'] ?? '';
$whatsapp = $input['whatsapp'] ?? '';
$source = $input['source'] ?? 'Chat AI';

if (empty($nombre) || empty($whatsapp)) {
    echo json_encode(['error' => 'Incomplete data']);
    exit;
}

// 1. Almacenar en un archivo CSV como respaldo rápido
$file = 'leads_chat.csv';
$date = date('Y-m-d H:i:s');
$line = "\"$date\", \"$nombre\", \"$whatsapp\", \"$source\"\n";
file_put_contents($file, $line, FILE_APPEND);

// 2. Enviar por correo a la agencia
$to = "contacto@agenciapatagoniacoach.cl"; // Ajusta el correo si es necesario
$subject = "🚀 NUEVO LEAD - CHAT AI";
$body = "Se ha capturado un nuevo interés desde el Chat AI:\n\n";
$body .= "Nombre: $nombre\n";
$body .= "WhatsApp: $whatsapp\n";
$body .= "Fecha: $date\n";

$headers = "From: no-reply@agenciapatagoniacoach.cl";

mail($to, $subject, $body, $headers);

echo json_encode(['success' => true]);
?>
