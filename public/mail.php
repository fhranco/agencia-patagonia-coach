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
    
    // Captura de datos básicos
    $nombre = strip_tags($_POST['nombre'] ?? 'Sin nombre');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $whatsapp = strip_tags($_POST['whatsapp'] ?? 'No provisto');
    $nicho = strip_tags($_POST['nicho'] ?? 'No especificado');
    $diagnostico = strip_tags($_POST['diagnostico'] ?? 'N/A');
    $score = strip_tags($_POST['score'] ?? '0');
    
    $subject = "🔥 NUEVA AUDITORÍA: $nicho - $nombre ($score/600)";

    // Cabecera del correo
    $body = "====================================================\n";
    $body .= "   NUEVA AUDITORÍA ESTRATÉGICA - PATAGONIA COACH    \n";
    $body .= "====================================================\n\n";
    
    $body .= "DATOS DEL CLIENTE:\n";
    $body .= "----------------------------------------------------\n";
    $body .= "Nombre:    $nombre\n";
    $body .= "Email:     $email\n";
    $body .= "WhatsApp:  $whatsapp\n\n";

    $body .= "RESULTADO DEL DIAGNÓSTICO:\n";
    $body .= "----------------------------------------------------\n";
    $body .= "Nicho:       $nicho\n";
    $body .= "Diagnóstico: $diagnostico\n";
    $body .= "Madurez:     $score / 600\n\n";

    // Decodificar la Radiografía Completa (Las 20 respuestas)
    if (isset($_POST['full_audit_data'])) {
        $audit_data = json_decode($_POST['full_audit_data'], true);
        
        if (is_array($audit_data)) {
            $body .= "RADIOGRAFÍA OPERATIVA (20 PUNTOS CLAVE):\n";
            $body .= "----------------------------------------------------\n";
            
            foreach ($audit_data as $index => $item) {
                $num = $index + 1;
                $pregunta = $item['q'];
                $respuesta = $item['a'];
                $body .= "[$num] $pregunta\n";
                $body .= "    R: $respuesta\n\n";
            }
        }
    }

    $body .= "----------------------------------------------------\n";
    $body .= "Enviado automáticamente desde agenciapatagoniacoach.cl\n";

    $headers = "From: webmaster@agenciapatagoniacoach.cl\r\n";
    $headers .= "Cc: fgallardo@agenciapatagoniacoach.cl\r\n";
    if ($email) {
        $headers .= "Reply-To: $email\r\n";
    }
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Auditoría recibida correctamente"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error al procesar el envío"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
