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
    
    // Captura de datos universales
    $form_type = strip_tags($_POST['form_type'] ?? 'Auditoría General');
    $nombre = strip_tags($_POST['nombre'] ?? 'Sin nombre');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $whatsapp = strip_tags($_POST['whatsapp'] ?? 'No provisto');
    
    // Campos específicos de Auditoría Profunda
    $nicho = strip_tags($_POST['nicho'] ?? 'No especificado');
    $score = strip_tags($_POST['score'] ?? '0');
    
    // Campos específicos de Formulario de Contacto Simple
    $presupuesto = strip_tags($_POST['presupuesto'] ?? 'No especificado');
    $mensaje = strip_tags($_POST['mensaje'] ?? '');

    $subject = "🔥 [$form_type] $nombre - $nicho";
    if ($score > 0) {
        $subject .= " ($score/600)";
    }

    // Cuerpo del mensaje
    $body = "====================================================\n";
    $body .= "   REQUERIMIENTO RECIBIDO - AGENCIA PATAGONIACOACH  \n";
    $body .= "====================================================\n\n";
    
    $body .= "DATOS DE IDENTIDAD:\n";
    $body .= "----------------------------------------------------\n";
    $body .= "Nombre/Empresa: $nombre\n";
    $body .= "Email:          $email\n";
    $body .= "WhatsApp:       $whatsapp\n\n";

    if ($form_type === 'Auditoría Estratégica (Formulario)') {
        $body .= "DETALLES DEL PROYECTO:\n";
        $body .= "----------------------------------------------------\n";
        $body .= "Presupuesto:    $presupuesto\n";
        $body .= "Mensaje/Reto:   $mensaje\n\n";
    }

    if ($score > 0) {
        $body .= "RESULTADO DEL DIAGNÓSTICO:\n";
        $body .= "----------------------------------------------------\n";
        $body .= "Nicho:          $nicho\n";
        $body .= "Madurez:        $score / 600\n\n";
    }

    // Decodificar la Radiografía Completa si existe
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
    $body .= "Origen: https://agenciapatagoniacoach.cl\n";
    $body .= "Timestamp: " . date("Y-m-d H:i:s") . "\n";

    $headers = "From: webmaster@agenciapatagoniacoach.cl\r\n";
    $headers .= "Cc: fgallardo@agenciapatagoniacoach.cl\r\n";
    if ($email) {
        $headers .= "Reply-To: $email\r\n";
    }
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Datos inyectados correctamente al sistema"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Error en la inyección de datos"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}
?>
