<?php
/**
 * SECRETS DE PRODUCCIÓN
 * 
 * Copia este archivo como secrets.php y reemplaza los valores.
 * NUNCA subas secrets.php al repositorio (ya está en .gitignore).
 * 
 * 1. cp public/secrets.example.php public/secrets.php
 * 2. Edita public/secrets.php con tus keys reales de DeepSeek
 * 3. Sube secrets.php manualmente al servidor via FTP
 */

return [
  'deepseek_key_chat' => 'sk-tu-api-key-de-deepseek',
  'deepseek_key_api'  => 'sk-tu-api-key-secundaria',
  'admin_email'       => 'agente@agenciapatagoniacoach.cl',
  'contact_email'     => 'contacto@agenciapatagoniacoach.cl',
  'site_email'        => 'no-reply@agenciapatagoniacoach.cl',
  'whatsapp'          => '+56995684198',
];
