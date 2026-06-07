import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Target, 
  Activity, 
  FileText,
  ChevronRight,
  TrendingUp,
  Globe,
  Settings,
  Home,
  CheckCircle2,
  AlertCircle,
  BarChart,
  Layout,
  Cpu,
  Layers,
  Mail,
  Loader2
} from 'lucide-react';

const businessNiches = {
  tourism: [
    { id: 'hotel', name: "Hotelería & Lodges de Lujo", icon: <Target className="w-5 h-5 text-[#FF7A18]" /> },
    { id: 'operator', name: "Operadores de Tours & Expediciones", icon: <Activity className="w-5 h-5 text-[#FF7A18]" /> },
    { id: 'gastronomy', name: "Gastronomía & Restaurantes", icon: <FileText className="w-5 h-5 text-[#FF7A18]" /> }
  ],
  industry: [
    { id: 'logistics', name: "Logística & Transporte Pesado", icon: <Zap className="w-5 h-5 text-patagonia-red" /> },
    { id: 'energy', name: "Energía & Oil/Gas", icon: <BarChart3 className="w-5 h-5 text-patagonia-red" /> },
    { id: 'construction', name: "Construcción & Ingeniería", icon: <ShieldCheck className="w-5 h-5 text-patagonia-red" /> }
  ],
  retail: [
    { id: 'fashion', name: "Tiendas de Moda & Hogar", icon: <Target className="w-5 h-5 text-patagonia-cyan" /> },
    { id: 'tech', name: "Tecnología & Equipamiento", icon: <Zap className="w-5 h-5 text-patagonia-cyan" /> },
    { id: 'services', name: "Servicios Profesionales & B2B", icon: <MessageSquare className="w-5 h-5 text-patagonia-cyan" /> }
  ]
};

const nicheQuestions = {
  hotel: [
    { id: 1, title: "¿Cómo se sincroniza su disponibilidad real con Booking/Expedia hoy?", options: [{ text: "Manual (Entramos a cada portal a mano)", score: 5 }, { text: "Channel Manager básico con lagunas", score: 15 }, { text: "Sincronización instantánea centralizada", score: 30 }] },
    { id: 2, title: "¿Qué sucede cuando un cliente pregunta por WhatsApp a las 11 PM?", options: [{ text: "Nada hasta que el recepcionista despierte", score: 5 }, { text: "Un mensaje automático que pide esperar", score: 15 }, { text: "Una IA resuelve dudas y confirma disponibilidad", score: 30 }] },
    { id: 3, title: "¿Cómo capturan los datos de sus huéspedes para futuras campañas?", options: [{ text: "En cuadernos o fichas de papel sueltas", score: 5 }, { text: "Excel manual post-estadía", score: 15 }, { text: "Base de datos unificada en tiempo real", score: 30 }] },
    { id: 4, title: "¿Cuál es su estrategia para aumentar las reservas directas (sin pagar comisión)?", options: [{ text: "No tenemos estrategia de venta directa", score: 5 }, { text: "Un botón básico de reserva en la web", score: 15 }, { text: "Ecosistema de incentivos y motor de reservas pro", score: 30 }] },
    { id: 5, title: "¿Cómo gestionan la limpieza y mantenimiento de habitaciones?", options: [{ text: "Gritos por radio o mensajes de WhatsApp", score: 5 }, { text: "Planillas impresas diarias", score: 15 }, { text: "App de gestión operativa en tiempo real", score: 30 }] },
    { id: 6, title: "¿Cómo informan a sus huéspedes sobre servicios adicionales (Excursiones, Spa, etc)?", options: [{ text: "Con folletos impresos en la habitación", score: 5 }, { text: "El recepcionista les cuenta al llegar", score: 15 }, { text: "Conserje digital interactivo 24/7", score: 30 }] },
    { id: 7, title: "¿Qué pasa con los clientes que dejaron sus datos pero no reservaron?", options: [{ text: "Se pierden en el olvido", score: 5 }, { text: "Intentamos llamarlos si hay tiempo", score: 15 }, { text: "Marketing de retención automático (IA)", score: 30 }] },
    { id: 8, title: "¿Cómo miden la reputación de su Lodge en TripAdvisor/Google?", options: [{ text: "Revisamos de vez en cuando si hay quejas", score: 10 }, { text: "Respondemos manualmente lo que podemos", score: 20 }, { text: "Monitoreo y respuesta asistida por IA", score: 30 }] },
    { id: 9, title: "¿Cómo aseguran que el equipo de cocina sepa de dietas especiales?", options: [{ text: "Avisamos verbalmente si nos acordamos", score: 5 }, { text: "Lo anotamos en la comanda", score: 15 }, { text: "Ficha de huésped compartida digitalmente", score: 30 }] },
    { id: 10, title: "¿Cómo es su proceso de check-out?", options: [{ text: "Lento, esperando que revisen el minibar", score: 5 }, { text: "Rápido pero manual", score: 15 }, { text: "Check-out express digital", score: 30 }] },
    { id: 11, title: "¿Su equipo habla inglés fluido para vender servicios extra?", options: [{ text: "Es una barrera crítica", score: 5 }, { text: "Algunos lo manejan básico", score: 15 }, { text: "Asistente de IA bilingüe operativo", score: 30 }] },
    { id: 12, title: "¿Cómo gestionan los inventarios de blancos y amenities?", options: [{ text: "Cuando vemos que falta algo", score: 5 }, { text: "Inventario manual semanal", score: 15 }, { text: "Control de stock digital con alertas", score: 30 }] },
    { id: 13, title: "¿Cómo atraen al mercado de lujo internacional?", options: [{ text: "Solo por portales (Booking)", score: 5 }, { text: "Publicidad genérica en FB", score: 15 }, { text: "Embudos de autoridad de nicho", score: 30 }] },
    { id: 14, title: "¿Qué tan difícil es sacar un reporte de ocupación real ahora?", options: [{ text: "Horas de orden y cálculo", score: 5 }, { text: "Revisando el PMS básico", score: 15 }, { text: "Un clic, datos en tiempo real", score: 30 }] },
    { id: 15, title: "¿Cómo capacitan a su nuevo personal?", options: [{ text: "Mirando cómo trabaja el resto", score: 5 }, { text: "Manuales impresos viejos", score: 15 }, { text: "Plataforma de formación continua", score: 30 }] },
    { id: 16, title: "¿Sus huéspedes pueden reservar tours sin ir a recepción?", options: [{ text: "No, deben ir físicamente", score: 5 }, { text: "Por WhatsApp pero es lento", score: 15 }, { text: "Autogestión digital instantánea", score: 30 }] },
    { id: 17, title: "¿Cómo sabe cuánta energía gasta cada habitación?", options: [{ text: "No tenemos cómo saberlo", score: 5 }, { text: "Revisando el medidor general", score: 15 }, { text: "Monitoreo inteligente (IOT)", score: 30 }] },
    { id: 18, title: "¿Su web es usable desde un teléfono móvil?", options: [{ text: "No, es vieja y lenta", score: 5 }, { text: "Se ve aceptable", score: 15 }, { text: "Experiencia Mobile-First de élite", score: 30 }] },
    { id: 19, title: "¿Cómo protegen la privacidad de sus huéspedes?", options: [{ text: "Confiamos en nuestro equipo", score: 10 }, { text: "Cumplimos con la ley básica", score: 20 }, { text: "Protocolos de seguridad digital avanzados", score: 30 }] },
    { id: 20, title: "¿Cuál es su mayor freno para crecer hoy?", options: [{ text: "Falta de personal e infraestructura", score: 10 }, { text: "Dependencia de las OTAs (Comisiones)", score: 20 }, { text: "Falta de sistemas escalables", score: 30 }] }
  ],
  operator: [
    { id: 1, title: "¿Cómo coordinan hoy la logística de los guías en terreno?", options: [{ text: "Llamadas y mensajes de WhatsApp caóticos", score: 5 }, { text: "Reunión matutina diaria", score: 15 }, { text: "Panel de control logístico en tiempo real", score: 30 }] },
    { id: 2, title: "¿Cómo envían los vouchers y políticas de cancelación?", options: [{ text: "Enviamos PDFs manuales por Mail", score: 5 }, { text: "Link genérico en la web", score: 15 }, { text: "Entrega automática tras pago", score: 30 }] },
    { id: 3, title: "¿Cómo aseguran que se sigan los protocolos de seguridad en montaña/mar?", options: [{ text: "Confiamos en el criterio del guía", score: 5 }, { text: "Bitácora de papel diaria", score: 15 }, { text: "Validación digital de checklist obligatorio", score: 30 }] },
    { id: 4, title: "¿Cómo atraen clientes internacionales de forma directa?", options: [{ text: "No tenemos estrategia digital", score: 5 }, { text: "Publicidad básica en IG", score: 15 }, { text: "Ecosistema de autoridad global", score: 30 }] },
    { id: 5, title: "¿Qué sucede si un guía pierde la conexión en terreno?", options: [{ text: "Queda incomunicado totalmente", score: 5 }, { text: "Usamos radio pero es ineficiente", score: 15 }, { text: "Sistemas Offline-First con sincronización", score: 30 }] },
    { id: 6, title: "¿Cómo capturan contenido visual de calidad durante los tours?", options: [{ text: "Dependemos de la buena voluntad de los guías", score: 5 }, { text: "Pedimos fotos de vez en cuando", score: 15 }, { text: "Estrategia de captura y curación automatizada", score: 30 }] },
    { id: 7, title: "¿Cómo miden el ROI de cada una de sus excursiones?", options: [{ text: "Por la sensación de ventas", score: 5 }, { text: "Cálculo manual de fin de mes", score: 15 }, { text: "Reporte de rentabilidad por tour real", score: 30 }] },
    { id: 8, title: "¿Cómo es su proceso de pago para clientes extranjeros?", options: [{ text: "Transferencias lentas o efectivo", score: 5 }, { text: "Pasarela básica de pagos", score: 15 }, { text: "Multi-moneda con integración total", score: 30 }] },
    { id: 9, title: "¿Cómo gestionan las listas de pasajeros para seguros?", options: [{ text: "Tipeamos a mano cada nombre", score: 5 }, { text: "Planilla Excel semi-manual", score: 15 }, { text: "Importación y envío automático", score: 30 }] },
    { id: 10, title: "¿Sus tours tienen una narrativa de marca consistente?", options: [{ text: "Cada guía cuenta su propia historia", score: 5 }, { text: "Pauta básica impresa", score: 15 }, { text: "Entrenamiento dinámico en narrativa", score: 30 }] },
    { id: 11, title: "¿Cómo saben si un equipo (carpas, botes, etc) necesita reparación?", options: [{ text: "Cuando se rompe en medio del tour", score: 5 }, { text: "Revisión visual ocasional", score: 15 }, { text: "Control de activos con mantenimiento", score: 30 }] },
    { id: 12, title: "¿Cómo responden a las reseñas negativas en portales?", options: [{ text: "Las ignoramos o discutimos", score: 5 }, { text: "Respondemos con un texto estándar", score: 15 }, { text: "Análisis y respuesta estratégica IA", score: 30 }] },
    { id: 13, title: "¿Cómo gestionan las reservas de último minuto?", options: [{ text: "Diciendo 'No' porque es un caos coordinar", score: 5 }, { text: "Intentando acomodar a mano", score: 15 }, { text: "Sistema de disponibilidad dinámica", score: 30 }] },
    { id: 14, title: "¿Cuál es su mayor costo operativo hoy?", options: [{ text: "Horas hombre en oficina", score: 10 }, { text: "Marketing ineficiente", score: 20 }, { text: "Falta de escala tecnológica", score: 30 }] },
    { id: 15, title: "¿Cómo aseguran que el cliente vuelva el próximo año?", options: [{ text: "Esperamos que nos recuerden", score: 5 }, { text: "Enviamos mail masivo en navidad", score: 15 }, { text: "Nutrición personalizada de leads", score: 30 }] },
    { id: 16, title: "¿Su sitio web carga rápido en conexiones rurales?", options: [{ text: "No, es muy pesado", score: 5 }, { text: "Funciona regular", score: 15 }, { text: "Optimización extrema de velocidad", score: 30 }] },
    { id: 17, title: "¿Cómo gestionan los convenios con agencias locales?", options: [{ text: "Anotamos todo en una libreta", score: 5 }, { text: "Excel compartido", score: 15 }, { text: "Portal de aliados automatizado", score: 30 }] },
    { id: 18, title: "¿Qué tan automatizado está su proceso de facturación?", options: [{ text: "100% manual por contador", score: 5 }, { text: "Sistema básico separado", score: 15 }, { text: "Integrado con la reserva", score: 30 }] },
    { id: 19, title: "¿Cómo protegen la privacidad de sus clientes?", options: [{ text: "Están en los mails de los guías", score: 5 }, { text: "En carpetas locales", score: 15 }, { text: "Cifrado y acceso restringido", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de escala para este año?", options: [{ text: "Mantener la operación actual", score: 10 }, { text: "Crecer un poco", score: 20 }, { text: "Escalado total vía sistemas", score: 30 }] }
  ],
  gastronomy: [
    { id: 1, title: "¿Cómo gestionan hoy las reservas de mesas?", options: [{ text: "Libro de reservas manual en el mesón", score: 5 }, { text: "WhatsApp o Google Form básico", score: 15 }, { text: "Plataforma de reservas inteligente", score: 30 }] },
    { id: 2, title: "¿Cómo se enteran de las quejas antes de que lleguen a Google?", options: [{ text: "Solo cuando vemos el mal comentario", score: 5 }, { text: "Encuesta manual ocasional", score: 15 }, { text: "Sistema de feedback instantáneo", score: 30 }] },
    { id: 3, title: "¿Cómo atraen clientes los días de baja rotación?", options: [{ text: "No tenemos estrategia activa", score: 5 }, { text: "Publicidad genérica diaria", score: 15 }, { text: "Marketing predictivo para llenar mesas", score: 30 }] },
    { id: 4, title: "¿Cómo gestionan su inventario de insumos perecederos?", options: [{ text: "Por 'ojo' y experiencia del chef", score: 5 }, { text: "Control manual semanal", score: 15 }, { text: "Control de stock digital automático", score: 30 }] },
    { id: 5, title: "¿Cómo es su proceso de pedido online (Delivery/Pickup)?", options: [{ text: "Dependemos 100% de apps (UberEats)", score: 5 }, { text: "Un WhatsApp con catálogo manual", score: 15 }, { text: "Canal propio de alta rentabilidad", score: 30 }] },
    { id: 6, title: "¿Cómo capturan los datos de los clientes que comen en el local?", options: [{ text: "No los capturamos", score: 5 }, { text: "Sorteos con papelitos", score: 15 }, { text: "WiFi social o QR inteligente", score: 30 }] },
    { id: 7, title: "¿Cuánto tiempo pierde el equipo explicando la carta a extranjeros?", options: [{ text: "Demasiado, es un cuello de botella", score: 5 }, { text: "Lo justo, pero con dificultad", score: 15 }, { text: "Menú interactivo multi-idioma IA", score: 30 }] },
    { id: 8, title: "¿Cómo aseguran la consistencia de sus platos en cada turno?", options: [{ text: "Confianza en el chef de turno", score: 5 }, { text: "Fichas técnicas impresas", score: 15 }, { text: "Sistematización operativa digital", score: 30 }] },
    { id: 9, title: "¿Cómo gestionan la pauta digital para turistas?", options: [{ text: "No hacemos publicidad segmentada", score: 5 }, { text: "Buscamos influencers locales", score: 15 }, { text: "Publicidad geolocalizada hiper-nicho", score: 30 }] },
    { id: 10, title: "¿Cómo calculan el costo real por plato hoy?", options: [{ text: "Estimación general por inflación", score: 5 }, { text: "Excel manual desactualizado", score: 15 }, { text: "Escandallo digital en tiempo real", score: 30 }] },
    { id: 11, title: "¿Su equipo de sala está capacitado en venta sugestiva?", options: [{ text: "Toman pedidos reactivamente", score: 5 }, { text: "Tienen instrucciones básicas", score: 15 }, { text: "Protocolo de aumento de ticket", score: 30 }] },
    { id: 12, title: "¿Qué pasa con los leads que preguntan por eventos corporativos?", options: [{ text: "A veces se nos olvida responder", score: 5 }, { text: "Respondemos mail con PDF", score: 15 }, { text: "Embudo de conversión de eventos", score: 30 }] },
    { id: 13, title: "¿Cómo gestionan las mermas y desperdicios?", options: [{ text: "No tenemos un registro claro", score: 5 }, { text: "Anotamos lo que se bota", score: 15 }, { text: "Análisis de eficiencia operativa", score: 30 }] },
    { id: 14, title: "¿Qué tan rápido se actualizan sus precios digitales?", options: [{ text: "Un caos cambiar en web y apps", score: 5 }, { text: "Lo hacemos una vez al mes", score: 15 }, { text: "Sincronización total instantánea", score: 30 }] },
    { id: 15, title: "¿Cuál es su nivel de fidelización de clientes locales?", options: [{ text: "Muy bajo, dependemos del turismo", score: 5 }, { text: "Tenemos clientes habituales", score: 15 }, { text: "Club de fidelización automatizado", score: 30 }] },
    { id: 16, title: "¿Su personal administrativo pierde tiempo con facturas manuales?", options: [{ text: "Casi todo el tiempo", score: 5 }, { text: "Lo normal", score: 15 }, { text: "Automatización administrativa", score: 30 }] },
    { id: 17, title: "¿Cómo atraen al mercado de 'foodies' internacionales?", options: [{ text: "Esperando aparecer en guías", score: 5 }, { text: "Fotos en Instagram de vez en cuando", score: 15 }, { text: "Estrategia de autoridad gastronómica", score: 30 }] },
    { id: 18, title: "¿Cómo gestionan la rotación de su personal?", options: [{ text: "Un problema constante y caótico", score: 5 }, { text: "Se maneja pero es difícil", score: 15 }, { text: "Protocolos de inducción rápidos", score: 30 }] },
    { id: 19, title: "¿Cómo protegen la higiene y seguridad alimentaria?", options: [{ text: "Cumplimos con lo que pide el inspector", score: 5 }, { text: "Registro manual ocasional", score: 15 }, { text: "Bitácora digital inviolable", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de rentabilidad para este año?", options: [{ text: "Sobrevivir a la temporada", score: 10 }, { text: "Mejorar los márgenes", score: 20 }, { text: "Maximizar eficiencia vía sistemas", score: 30 }] }
  ],
  logistics: [
    { id: 1, title: "¿Cómo se rastrean hoy sus unidades en tiempo real?", options: [{ text: "Llamando por teléfono al conductor", score: 5 }, { text: "GPS básico sin integración", score: 15 }, { text: "Telemetría avanzada integrada", score: 30 }] },
    { id: 2, title: "¿Cómo se reportan las fallas mecánicas en ruta?", options: [{ text: "El conductor avisa cuando puede", score: 5 }, { text: "WhatsApp o llamada matutina", score: 15 }, { text: "Reporte digital con alerta inmediata", score: 30 }] },
    { id: 3, title: "¿Cómo gestionan las hojas de ruta y despachos?", options: [{ text: "Papeles impresos y carpetas físicas", score: 5 }, { text: "Excel que se actualiza al final del día", score: 15 }, { text: "Gestión digital nativa en tiempo real", score: 30 }] },
    { id: 4, title: "¿Cómo saben el costo exacto por kilómetro de cada unidad?", options: [{ text: "No lo sabemos con precisión", score: 5 }, { text: "Cálculo aproximado manual", score: 15 }, { text: "Análisis de costos automatizado", score: 30 }] },
    { id: 5, title: "¿Cómo aseguran que los conductores sigan las normas de seguridad?", options: [{ text: "Confiamos en su experiencia", score: 5 }, { text: "Charlas de seguridad mensuales", score: 15 }, { text: "Monitoreo de comportamiento digital", score: 30 }] },
    { id: 6, title: "¿Qué pasa si se pierde un comprobante de entrega?", options: [{ text: "Problemas de facturación y cobro", score: 5 }, { text: "Intentamos que el cliente firme otro", score: 15 }, { text: "Prueba de entrega digital (POD) instantánea", score: 30 }] },
    { id: 7, title: "¿Cómo coordinan los descansos y relevos del equipo?", options: [{ text: "Pizarra o Excel manual", score: 5 }, { text: "Grupo de WhatsApp", score: 15 }, { text: "Algoritmo de gestión de turnos", score: 30 }] },
    { id: 8, title: "¿Cómo gestionan el stock de repuestos críticos?", options: [{ text: "Revisión visual ocasional", score: 5 }, { text: "Planilla Excel manual", score: 15 }, { text: "Alertas de stock automático", score: 30 }] },
    { id: 9, title: "¿Cómo se comunican con sus clientes sobre retrasos?", options: [{ text: "El cliente nos llama para reclamar", score: 5 }, { text: "Enviamos mail si nos acordamos", score: 15 }, { text: "Notificaciones automáticas proactivas", score: 30 }] },
    { id: 10, title: "¿Cómo analizan la eficiencia de sus rutas actuales?", options: [{ text: "No tenemos análisis de rutas", score: 5 }, { text: "Por el tiempo que demoran", score: 15 }, { text: "Optimización por IA de rutas", score: 30 }] },
    { id: 11, title: "¿Cómo gestionan el mantenimiento preventivo de su flota?", options: [{ text: "Cuando algo suena mal", score: 5 }, { text: "Cada ciertos meses (Manual)", score: 15 }, { text: "Mantenimiento basado en datos reales", score: 30 }] },
    { id: 12, title: "¿Qué tan fácil es escalar su flota en un 50%?", options: [{ text: "Un colapso administrativo total", score: 5 }, { text: "Requeriría mucha gente nueva", score: 15 }, { text: "Escalado Plug & Play vía sistemas", score: 30 }] },
    { id: 13, title: "¿Cómo atraen nuevos contratos corporativos?", options: [{ text: "Por contactos personales únicamente", score: 5 }, { text: "Presentaciones comerciales", score: 15 }, { text: "Estrategia de autoridad B2B", score: 30 }] },
    { id: 14, title: "¿Cómo protegen su información logística sensible?", options: [{ text: "Está en las computadoras de la oficina", score: 5 }, { text: "Contraseñas básicas", score: 15 }, { text: "Arquitectura de seguridad robusta", score: 30 }] },
    { id: 15, title: "¿Su equipo administrativo pierde tiempo tipeando facturas?", options: [{ text: "Casi todo el día", score: 5 }, { text: "Lo normal", score: 15 }, { text: "Integración ERP automatizada", score: 30 }] },
    { id: 16, title: "¿Cómo gestionan las multas y seguros de la flota?", options: [{ text: "Cuando llegan los cobros", score: 5 }, { text: "Excel de vencimientos manual", score: 15 }, { text: "Gestión proactiva centralizada", score: 30 }] },
    { id: 17, title: "¿Cómo saben si su operación es rentable por cliente?", options: [{ text: "No lo sabemos individualmente", score: 5 }, { text: "Cálculo aproximado", score: 15 }, { text: "P&L por cliente en tiempo real", score: 30 }] },
    { id: 18, title: "¿Cómo es su proceso de selección de nuevos conductores?", options: [{ text: "Por recomendación directa", score: 5 }, { text: "Entrevistas estándar", score: 15 }, { text: "Evaluación técnica sistematizada", score: 30 }] },
    { id: 19, title: "¿Cómo empresa proyecta una imagen de alta tecnología?", options: [{ text: "No, nos ven como tradicionales", score: 5 }, { text: "Estamos en transición", score: 15 }, { text: "Sí, somos líderes tecnológicos", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de facturación para el próximo año?", options: [{ text: "Mantener lo que tenemos", score: 10 }, { text: "Crecimiento lineal", score: 20 }, { text: "Crecimiento exponencial vía sistemas", score: 30 }] }
  ],
  energy: [
    { id: 1, title: "¿Cómo se capturan hoy los reportes de inspección en terreno?", options: [{ text: "Papel y lápiz, luego se transcriben", score: 5 }, { text: "Grupo de WhatsApp corporativo", score: 15 }, { text: "App de captura digital estructurada", score: 30 }] },
    { id: 2, title: "¿Cuánto tiempo tarda la gerencia en ver un dato crítico de planta?", options: [{ text: "Días, hasta que se arma el reporte", score: 5 }, { text: "Horas, vía mail", score: 15 }, { text: "Segundos, vía dashboard en vivo", score: 30 }] },
    { id: 3, title: "¿Cómo aseguran que se sigan los protocolos de seguridad industrial?", options: [{ text: "Confiamos en el entrenamiento previo", score: 5 }, { text: "Supervisión visual ocasional", score: 15 }, { text: "Checklist digital obligatorio por tarea", score: 30 }] },
    { id: 4, title: "¿Cómo gestionan el mantenimiento de equipos de alta complejidad?", options: [{ text: "Cuando fallan (Mantenimiento reactivo)", score: 5 }, { text: "Programación manual en Excel", score: 15 }, { text: "Mantenimiento predictivo basado en datos", score: 30 }] },
    { id: 5, title: "¿Cómo documentan la 'memoria técnica' de sus ingenieros?", options: [{ text: "Está en la cabeza de los veteranos", score: 5 }, { text: "Manuales impresos y archivos sueltos", score: 15 }, { text: "Ecosistema de conocimiento digital (Wiki)", score: 30 }] },
    { id: 6, title: "¿Cómo coordinan los trabajos con contratistas externos?", options: [{ text: "Correos y llamadas interminables", score: 5 }, { text: "Excel compartido", score: 15 }, { text: "Portal de gestión de proveedores", score: 30 }] },
    { id: 7, title: "¿Cómo monitorean la eficiencia energética de sus propias plantas?", options: [{ text: "Revisando costos de facturación", score: 5 }, { text: "Registro manual matutino", score: 15 }, { text: "Telemetría avanzada e IA", score: 30 }] },
    { id: 8, title: "¿Qué pasa si hay un incidente de seguridad ahora?", options: [{ text: "Caos de llamadas para entender qué pasó", score: 5 }, { text: "Activación manual de protocolos", score: 15 }, { text: "Protocolo digital con alerta multicanal", score: 30 }] },
    { id: 9, title: "¿Cómo gestionan los inventarios de repuestos de emergencia?", options: [{ text: "Por inspección visual", score: 5 }, { text: "Inventario manual mensual", score: 15 }, { text: "Control de stock con alertas críticas", score: 30 }] },
    { id: 10, title: "¿Cómo atraen inversión o nuevos contratos estatales/privados?", options: [{ text: "Solo por relaciones previas", score: 5 }, { text: "Presentaciones comerciales", score: 15 }, { text: "Plataforma de autoridad técnica", score: 30 }] },
    { id: 11, title: "¿Cómo analizan la rentabilidad por pozo/planta/unidad?", options: [{ text: "Cálculo global de la empresa", score: 5 }, { text: "Reporte manual por unidad", score: 15 }, { text: "Análisis de rentabilidad granulado IA", score: 30 }] },
    { id: 12, title: "¿Cómo es su proceso de capacitación continua?", options: [{ text: "Nulo o muy esporádico", score: 5 }, { text: "Capacitaciones externas presenciales", score: 15 }, { text: "LMS propio (Formación digital)", score: 30 }] },
    { id: 13, title: "¿Cómo aseguran que la información operativa sea soberana?", options: [{ text: "Dependemos de software de terceros", score: 5 }, { text: "Tenemos servidores locales básicos", score: 15 }, { text: "Infraestructura propia robusta", score: 30 }] },
    { id: 14, title: "¿Qué tan fácil es integrar una nueva planta a su sistema?", options: [{ text: "Meses de configuración manual", score: 5 }, { text: "Es factible pero lento", score: 15 }, { text: "Escalado modular automático", score: 30 }] },
    { id: 15, title: "¿Cómo gestionan los reportes de impacto ambiental?", options: [{ text: "Documentos manuales para cumplir", score: 5 }, { text: "Excel de seguimiento", score: 15 }, { text: "Dashboard de sustentabilidad real", score: 30 }] },
    { id: 16, title: "¿Cómo se protege contra ciberataques industriales?", options: [{ text: "No tenemos protocolos específicos", score: 5 }, { text: "Antivirus básico", score: 15 }, { text: "Ciberseguridad industrial avanzada", score: 30 }] },
    { id: 17, title: "¿Cómo proyecta su empresa en el mercado global?", options: [{ text: "Empresa local tradicional", score: 5 }, { text: "Tenemos presencia básica", score: 15 }, { text: "Autoridad técnica internacional", score: 30 }] },
    { id: 18, title: "¿Cómo gestionan la logística de personal a zonas remotas?", options: [{ text: "Planilla manual y llamadas", score: 5 }, { text: "Excel de coordinación", score: 15 }, { text: "Gestión logística integrada", score: 30 }] },
    { id: 19, title: "¿Cómo saben si su equipo está operando al 100%?", options: [{ text: "Si no hay quejas, está bien", score: 5 }, { text: "Reporte de producción diario", score: 15 }, { text: "OEE (Eficiencia General) en vivo", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de innovación para este año?", options: [{ text: "Mantener lo que funciona", score: 10 }, { text: "Explorar nuevas tecnologías", score: 20 }, { text: "Digitalización total operativa", score: 30 }] }
  ],
  construction: [
    { id: 1, title: "¿Cómo se lleva hoy el control de asistencia y HH en obra?", options: [{ text: "Libro de firmas o planillas de papel", score: 5 }, { text: "WhatsApp o Excel manual", score: 15 }, { text: "Control biométrico digital integrado", score: 30 }] },
    { id: 2, title: "¿Cómo se reportan los avances de obra desde el terreno?", options: [{ text: "Llamadas o visitas semanales del dueño", score: 5 }, { text: "Fotos por WhatsApp", score: 15 }, { text: "Reporte digital con certificación", score: 30 }] },
    { id: 3, title: "¿Cómo gestionan el stock de materiales críticos (cemento, fierro)?", options: [{ text: "Revisión visual matutina", score: 5 }, { text: "Vale de bodega de papel", score: 15 }, { text: "Gestión de inventario digital alertas", score: 30 }] },
    { id: 4, title: "¿Cómo aseguran que se cumpla el cronograma (Carta Gantt)?", options: [{ text: "Está pegada en la pared y no se cumple", score: 5 }, { text: "Actualización semanal en Excel", score: 15 }, { text: "Gestión dinámica de proyectos IA", score: 30 }] },
    { id: 5, title: "¿Cómo coordinan los cambios de último minuto en planos?", options: [{ text: "Gritos y dibujos sobre la marcha", score: 5 }, { text: "Planos impresos marcados a mano", score: 15 }, { text: "Visualización de planos digitalizada", score: 30 }] },
    { id: 6, title: "¿Cómo gestionan los subcontratistas y sus pagos?", options: [{ text: "Un desorden de facturas y deudas", score: 5 }, { text: "Planilla de control manual", score: 15 }, { text: "Portal de gestión de subcontratos", score: 30 }] },
    { id: 7, title: "¿Cómo capturan el 'antes y después' de cada etapa?", options: [{ text: "Fotos en los celulares de los capataces", score: 5 }, { text: "Carpeta de fotos desordenada", score: 15 }, { text: "Archivo visual de obra inteligente", score: 30 }] },
    { id: 8, title: "¿Cómo miden la rentabilidad real de cada proyecto hoy?", options: [{ text: "Cuando terminamos y vemos si sobró plata", score: 5 }, { text: "Estimación por Excel", score: 15 }, { text: "Control de costos en tiempo real", score: 30 }] },
    { id: 9, title: "¿Cómo atraen nuevas licitaciones o clientes?", options: [{ text: "Por contactos históricos únicamente", score: 5 }, { text: "Presentaciones comerciales estándar", score: 15 }, { text: "Portafolio de autoridad técnica digital", score: 30 }] },
    { id: 10, title: "¿Cómo gestionan las herramientas y maquinaria?", options: [{ text: "Se pierden o se rompen sin rastro", score: 5 }, { text: "Control de herramientas manual", score: 15 }, { text: "Gestión de activos con trazabilidad", score: 30 }] },
    { id: 11, title: "¿Cómo capacitican a su personal en nuevos métodos?", options: [{ text: "No tenemos capacitación estructurada", score: 5 }, { text: "Charlas informales", score: 15 }, { text: "Capacitación digital por módulos", score: 30 }] },
    { id: 12, title: "¿Cómo gestionan los reclamos de post-venta?", options: [{ text: "WhatsApp y correos que se pierden", score: 5 }, { text: "Ticketera básica", score: 15 }, { text: "Gestión de post-venta automatizada", score: 30 }] },
    { id: 13, title: "¿Qué tan difícil es abrir una nueva obra hoy?", options: [{ text: "Meses de caos administrativo", score: 5 }, { text: "Un esfuerzo manual agotador", score: 15 }, { text: "Proceso sistematizado escalable", score: 30 }] },
    { id: 14, title: "¿Cómo protegen su información estratégica (presupuestos)?", options: [{ text: "Está en las PCs de la oficina", score: 5 }, { text: "Archivos con contraseña básica", score: 15 }, { text: "Seguridad digital de clase empresarial", score: 30 }] },
    { id: 15, title: "¿Su oficina dedica tiempo a transcribir reportes de obra?", options: [{ text: "Casi todo el tiempo", score: 5 }, { text: "Lo normal", score: 15 }, { text: "Cero: reporte digital directo", score: 30 }] },
    { id: 16, title: "¿Cómo aseguran la calidad de los materiales recibidos?", options: [{ text: "Firma rápida de la guía de despacho", score: 5 }, { text: "Revisión visual básica", score: 15 }, { text: "Certificación digital de recepción", score: 30 }] },
    { id: 17, title: "¿Su empresa es percibida como 'Tech-Ready'?", options: [{ text: "No, somos tradicionales", score: 5 }, { text: "Estamos intentando mejorar", score: 15 }, { text: "Sí, somos innovadores en el rubro", score: 30 }] },
    { id: 18, title: "¿Cómo gestionan la seguridad y EPP en terreno?", options: [{ text: "Visualmente cuando el prevencionista va", score: 5 }, { text: "Checklist de papel", score: 15 }, { text: "Control digital diario obligatorio", score: 30 }] },
    { id: 19, title: "¿Cómo sabe si un proyecto va atrasado antes de que sea tarde?", options: [{ text: "Por instinto o quejas del cliente", score: 5 }, { text: "Revisión de Gantt mensual", score: 15 }, { text: "Alertas tempranas automáticas", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de expansión para este año?", options: [{ text: "Terminar lo que tenemos", score: 10 }, { text: "Crecimiento lineal", score: 20 }, { text: "Crecimiento exponencial vía sistemas", score: 30 }] }
  ],
  fashion: [
    { id: 1, title: "¿Cómo se sincroniza su stock de tienda con su web hoy?", options: [{ text: "Manual (Tipeamos cada venta en ambos lados)", score: 5 }, { text: "Carga masiva semanal", score: 15 }, { text: "Sincronización instantánea real", score: 30 }] },
    { id: 2, title: "¿Qué pasa con los clientes que abandonan su carrito online?", options: [{ text: "Se pierden para siempre", score: 5 }, { text: "Enviamos mail si el sistema lo permite", score: 15 }, { text: "Flujo de recuperación IA de alta conversión", score: 30 }] },
    { id: 3, title: "¿Cómo recomiendan productos basados en compras anteriores?", options: [{ text: "No hacemos recomendaciones", score: 5 }, { text: "Por 'ojo' del vendedor en tienda", score: 15 }, { text: "Motor de recomendaciones IA personalizado", score: 30 }] },
    { id: 4, title: "¿Cómo capturan los datos de los clientes que compran físico?", options: [{ text: "No capturamos datos", score: 5 }, { text: "Pedimos mail para la boleta a veces", score: 15 }, { text: "Ecosistema unificado Omnicanal", score: 30 }] },
    { id: 5, title: "¿Cuánto tiempo dedica su equipo a editar fotos de productos?", options: [{ text: "Días de diseño y retoque manual", score: 5 }, { text: "Usamos filtros pero es lento", score: 15 }, { text: "IA genera ambientes y retoques en segundos", score: 30 }] },
    { id: 6, title: "¿Cómo gestionan las devoluciones y cambios hoy?", options: [{ text: "Un proceso manual y frustrante para el cliente", score: 5 }, { text: "Ticketera básica de soporte", score: 15 }, { text: "Gestión autónoma vía portal de cliente", score: 30 }] },
    { id: 7, title: "¿Cuál es su estrategia de fidelización (Club de Puntos)?", options: [{ text: "Ninguna", score: 5 }, { text: "Descuento en la próxima compra a mano", score: 15 }, { text: "Programa de recompensas automatizado", score: 30 }] },
    { id: 8, title: "¿Cómo saben qué productos dejar de comprar por baja rotación?", options: [{ text: "Por el espacio que sobra en bodega", score: 5 }, { text: "Reporte de ventas mensual", score: 15 }, { text: "Análisis predictivo de inventario", score: 30 }] },
    { id: 9, title: "¿Cómo gestionan su pauta digital en redes sociales?", options: [{ text: "Botón 'Promocionar' esporádico", score: 5 }, { text: "Campaña básica de tráfico", score: 15 }, { text: "Optimización por eventos de venta real", score: 30 }] },
    { id: 10, title: "¿Su equipo sabe cuánto vendió antes de cerrar la tienda?", options: [{ text: "Hasta que cuadran la caja", score: 5 }, { text: "Revisando el sistema básico", score: 15 }, { text: "Dashboard en tiempo real móvil", score: 30 }] },
    { id: 11, title: "¿Cómo atraen clientes nuevos cada semana?", options: [{ text: "Dependemos de que pasen por fuera", score: 5 }, { text: "Posteamos diario en IG", score: 15 }, { text: "Máquina de adquisición automatizada", score: 30 }] },
    { id: 12, title: "¿Qué tan difícil es abrir una nueva sucursal o canal online?", options: [{ text: "Meses de caos administrativo", score: 5 }, { text: "Es factible pero lento", score: 15 }, { text: "Proceso 'Plug & Play' escalable", score: 30 }] },
    { id: 13, title: "¿Cómo se comunican con sus proveedores de stock?", options: [{ text: "WhatsApp y llamadas caóticas", score: 5 }, { text: "Correo electrónico formal", score: 15 }, { text: "Portal de proveedores automatizado", score: 30 }] },
    { id: 14, title: "¿Cómo aseguran que sus vendedores sigan el speech de marca?", options: [{ text: "Confiamos en su carisma", score: 5 }, { text: "Auditorías presenciales", score: 15 }, { text: "Entrenamiento asistido por IA", score: 30 }] },
    { id: 15, title: "¿Qué porcentaje de sus ventas son recurrentes?", options: [{ text: "Muy bajo, siempre clientes nuevos", score: 10 }, { text: "Alrededor del 20%", score: 20 }, { text: "Más del 50% (Lealtad alta)", score: 30 }] },
    { id: 16, title: "¿Cómo gestionan los envíos a todo Chile?", options: [{ text: "Vamos al correo nosotros mismos", score: 5 }, { text: "Cargamos datos manuales en courier", score: 15 }, { text: "Integración logística total", score: 30 }] },
    { id: 17, title: "¿Su web carga en menos de 2 segundos?", options: [{ text: "No, es muy lenta", score: 5 }, { text: "Funciona bien pero se puede mejorar", score: 15 }, { text: "Velocidad de élite optimizada", score: 30 }] },
    { id: 18, title: "¿Cómo protegen su marca de imitaciones digitales?", options: [{ text: "No hacemos nada", score: 5 }, { text: "Monitoreo manual básico", score: 15 }, { text: "Vigilancia digital activa", score: 30 }] },
    { id: 19, title: "¿Cuál es el valor promedio de vida de su cliente (LTV)?", options: [{ text: "No tengo idea", score: 5 }, { text: "Lo calculamos anualmente", score: 15 }, { text: "Dato clave optimizado a diario", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de rentabilidad para este año?", options: [{ text: "Sobrevivir", score: 10 }, { text: "Mejorar los márgenes", score: 20 }, { text: "Escalabilidad total vía sistemas", score: 30 }] }
  ],
  tech: [
    { id: 1, title: "¿Cómo gestionan hoy las especificaciones técnicas en su web?", options: [{ text: "Copiamos y pegamos de otros sitios", score: 5 }, { text: "Tipeamos cada ficha a mano", score: 15 }, { text: "Importación automática de catálogos", score: 30 }] },
    { id: 2, title: "¿Cómo es su proceso de soporte técnico post-venta?", options: [{ text: "Llamadas y mails que se pierden", score: 5 }, { text: "WhatsApp básico", score: 15 }, { text: "Ticketera de soporte automatizada", score: 30 }] },
    { id: 3, title: "¿Cómo informan sobre la garantía y estado de reparación?", options: [{ text: "El cliente debe llamar para preguntar", score: 5 }, { text: "Enviamos mail si hay novedades", score: 15 }, { text: "Portal de seguimiento en tiempo real", score: 30 }] },
    { id: 4, title: "¿Cómo atraen clientes B2B (empresas) de forma digital?", options: [{ text: "No tenemos estrategia corporativa", score: 5 }, { text: "Buscamos licitaciones activamente", score: 15 }, { text: "Estrategia de autoridad técnica B2B", score: 30 }] },
    { id: 5, title: "¿Cómo gestionan su stock de repuestos y accesorios?", options: [{ text: "Desordenado en bodega", score: 5 }, { text: "Excel de control manual", score: 15 }, { text: "Gestión de inventario con alertas", score: 30 }] },
    { id: 6, title: "¿Qué sucede con los leads que preguntan por cotizaciones?", options: [{ text: "Respondemos cuando tenemos tiempo", score: 5 }, { text: "Enviamos un PDF manual", score: 15 }, { text: "Generación automática de propuestas", score: 30 }] },
    { id: 7, title: "¿Cómo se comparan sus precios con el mercado dinámico?", options: [{ text: "Ni idea de la competencia", score: 5 }, { text: "Revisamos a mano una vez por semana", score: 15 }, { text: "Monitoreo de precios automático", score: 30 }] },
    { id: 8, title: "¿Cómo capturan reseñas técnicas de sus productos?", options: [{ text: "No tenemos reseñas", score: 5 }, { text: "Esperamos que el cliente escriba", score: 15 }, { text: "Sistema de captura de autoridad IA", score: 30 }] },
    { id: 9, title: "¿Cómo aseguran que su equipo esté actualizado en tecnología?", options: [{ text: "Cada uno aprende como puede", score: 5 }, { text: "Capacitaciones ocasionales", score: 15 }, { text: "Plataforma de formación continua", score: 30 }] },
    { id: 10, title: "¿Su web permite comparar productos técnicamente?", options: [{ text: "No, solo verlos por separado", score: 5 }, { text: "Tabla comparativa estática", score: 15 }, { text: "Comparador dinámico avanzado", score: 30 }] },
    { id: 11, title: "¿Cómo gestionan los proyectos de instalación compleja?", options: [{ text: "WhatsApp y cuadernos", score: 5 }, { text: "Excel de gestión de proyectos", score: 15 }, { text: "Gestión operativa sistematizada", score: 30 }] },
    { id: 12, title: "¿Cómo saben qué productos están por quedar obsoletos?", options: [{ text: "Cuando dejan de venderse", score: 5 }, { text: "Revisión manual de stock", score: 15 }, { text: "Análisis de ciclo de vida IA", score: 30 }] },
    { id: 13, title: "¿Cuál es su nivel de automatización en facturación B2B?", options: [{ text: "100% manual", score: 5 }, { text: "Sistema básico separado", score: 15 }, { text: "Integración total con la venta", score: 30 }] },
    { id: 14, title: "¿Cómo atraen al cliente que busca 'calidad' sobre 'precio'?", options: [{ text: "Solo bajando precios", score: 5 }, { text: "Publicidad en redes sociales", score: 15 }, { text: "Estrategia de autoridad técnica", score: 30 }] },
    { id: 15, title: "¿Qué tan fácil es integrar un nuevo proveedor a su web?", options: [{ text: "Meses de trabajo técnico manual", score: 5 }, { text: "Es posible pero lento", score: 15 }, { text: "Integración vía APIs automática", score: 30 }] },
    { id: 16, title: "¿Cómo protegen su información de clientes y ventas?", options: [{ text: "PCs de oficina sin seguridad extra", score: 5 }, { text: "Respaldos manuales", score: 15 }, { text: "Seguridad digital de clase élite", score: 30 }] },
    { id: 17, title: "¿Su empresa proyecta una imagen de líder tecnológico?", options: [{ text: "No, somos tradicionales", score: 5 }, { text: "En proceso de cambio", score: 15 }, { text: "Sí, somos referentes absolutos", score: 30 }] },
    { id: 18, title: "¿Cómo gestionan la logística de entrega de equipos pesados?", options: [{ text: "Llamando a fleteros a mano", score: 5 }, { text: "Planilla de coordinación", score: 15 }, { text: "Logística integrada automatizada", score: 30 }] },
    { id: 19, title: "¿Cómo saben si un cliente B2B está a punto de cambiarse?", options: [{ text: "Cuando deja de comprar", score: 5 }, { text: "Por intuición del vendedor", score: 15 }, { text: "Análisis de comportamiento predictivo", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de facturación para el próximo año?", options: [{ text: "Mantenerse", score: 10 }, { text: "Crecimiento lineal", score: 20 }, { text: "Crecimiento exponencial vía sistemas", score: 30 }] }
  ],
  services: [
    { id: 1, title: "¿Cómo califican y priorizan hoy a sus nuevos prospectos (Leads)?", options: [{ text: "Al que escribe último", score: 5 }, { text: "Por sensación del vendedor", score: 15 }, { text: "Lead Scoring automático IA", score: 30 }] },
    { id: 2, title: "¿Cuánto tiempo pierde su equipo redactando propuestas comerciales?", options: [{ text: "Horas o días por cada propuesta", score: 5 }, { text: "Copiamos y pegamos plantillas", score: 15 }, { text: "Generación dinámica en segundos", score: 30 }] },
    { id: 3, title: "¿Cómo gestionan el seguimiento de proyectos en curso?", options: [{ text: "WhatsApp y correos interminables", score: 5 }, { text: "Excel o Trello básico", score: 15 }, { text: "Ecosistema de gestión integrada", score: 30 }] },
    { id: 4, title: "¿Cómo saben cuántas horas reales dedica su equipo a cada cliente?", options: [{ text: "No tenemos medición de tiempo", score: 5 }, { text: "Registro manual aproximado", score: 15 }, { text: "Time-tracking integrado automático", score: 30 }] },
    { id: 5, title: "¿Cómo atraen clientes de alta rentabilidad (High-Ticket)?", options: [{ text: "Esperando recomendaciones boca a boca", score: 5 }, { text: "Publicidad masiva genérica", score: 15 }, { text: "Estrategia de autoridad de nicho", score: 30 }] },
    { id: 6, title: "¿Qué sucede con la información si un consultor clave renuncia?", options: [{ text: "Se lleva el conocimiento con él", score: 5 }, { text: "Está en sus mails corporativos", score: 15 }, { text: "Conocimiento sistematizado en Wiki", score: 30 }] },
    { id: 7, title: "¿Cómo miden la rentabilidad real de cada servicio que ofrecen?", options: [{ text: "Por la sensación de facturación", score: 5 }, { text: "Cálculo manual de fin de mes", score: 15 }, { text: "P&L por servicio en tiempo real", score: 30 }] },
    { id: 8, title: "¿Cómo es su proceso de cobranza y facturación?", options: [{ text: "Recordando y cobrando a mano", score: 5 }, { text: "Mail con PDF adjunto", score: 15 }, { text: "Cobranza automática recurrente", score: 30 }] },
    { id: 9, title: "¿Cómo aseguran que el tono de marca sea el mismo en cada consultoría?", options: [{ text: "Depende de quién entregue el servicio", score: 5 }, { text: "Manual de estilo impreso", score: 15 }, { text: "Sistematización de narrativa IA", score: 30 }] },
    { id: 10, title: "¿Cómo gestionan el feedback y testimonios de sus clientes?", options: [{ text: "No pedimos feedback formal", score: 5 }, { text: "Encuesta ocasional por mail", score: 15 }, { text: "Captura de autoridad automatizada", score: 30 }] },
    { id: 11, title: "¿Qué porcentaje de su facturación es recurrente (Retainers)?", options: [{ text: "Menos del 10%, siempre cazando", score: 5 }, { text: "Alrededor del 30%", score: 15 }, { text: "Más del 60% (Ingreso estable)", score: 30 }] },
    { id: 12, title: "¿Cómo capacitan a su equipo en nuevas metodologías?", options: [{ text: "Ensayando con clientes reales", score: 5 }, { text: "Capacitaciones externas anuales", score: 15 }, { text: "Protocolo de maestría continua", score: 30 }] },
    { id: 13, title: "¿Qué tan fácil es delegar su cargo hoy en la empresa?", options: [{ text: "Imposible, colapsa todo sin mí", score: 5 }, { text: "Requiere mi supervisión constante", score: 15 }, { text: "Estructura autónoma sistematizada", score: 30 }] },
    { id: 14, title: "¿Cómo protegen la propiedad intelectual de sus procesos?", options: [{ text: "No tenemos protección específica", score: 5 }, { text: "Contratos de confidencialidad", score: 15 }, { text: "Wiki corporativa protegida", score: 30 }] },
    { id: 15, title: "¿Cómo atraen al mercado internacional (exportación de servicios)?", options: [{ text: "No tenemos presencia internacional", score: 5 }, { text: "Web bilingüe básica", score: 15 }, { text: "Estrategia de autoridad global", score: 30 }] },
    { id: 16, title: "¿Su empresa es percibida como líder en tecnología de su rubro?", options: [{ text: "No, somos tradicionales", score: 5 }, { text: "Estamos en transición", score: 15 }, { text: "Sí, somos referentes tecnológicos", score: 30 }] },
    { id: 17, title: "¿Cómo gestionan las reuniones y agenda del equipo?", options: [{ text: "WhatsApp y coordinaciones manuales", score: 5 }, { text: "Calendarios compartidos básicos", score: 15 }, { text: "Agendamiento automático inteligente", score: 30 }] },
    { id: 18, title: "¿Cómo saben si un cliente está insatisfecho antes de que renuncie?", options: [{ text: "Cuando nos avisa que se va", score: 5 }, { text: "Por intuición del ejecutivo", score: 15 }, { text: "Análisis de salud de cliente IA", score: 30 }] },
    { id: 19, title: "¿Qué tan automatizado está su marketing de contenidos?", options: [{ text: "Nulo, posteamos cuando podemos", score: 5 }, { text: "Programamos una vez al mes", score: 15 }, { text: "Fábrica de contenidos asistida IA", score: 30 }] },
    { id: 20, title: "¿Cuál es su meta de rentabilidad para el próximo año?", options: [{ text: "Mantener la operación", score: 10 }, { text: "Mejorar los márgenes", score: 20 }, { text: "Escalabilidad exponencial", score: 30 }] }
  ]
};

const DigitalDiagnostic = ({ isModal = false }) => {
  const [step, setStep] = useState('sector'); // 'sector', 'niche', 'audit', 'processing', 'lead', 'result'
  const [currentSector, setCurrentSector] = useState(null);
  const [currentNiche, setCurrentNiche] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [dimensionScores, setDimensionScores] = useState({ flow: 0, comm: 0, sales: 0, scale: 0 });
  const [answers, setAnswers] = useState([]);
  const [leadData, setLeadData] = useState({ nombre: '', email: '', whatsapp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSectorSelect = (sector) => {
    setCurrentSector(sector);
    setStep('niche');
  };

  const handleNicheSelect = (niche) => {
    setCurrentNiche(niche);
    setStep('audit');
  };

  const handleOptionSelect = (optionText, score) => {
    const question = nicheQuestions[currentNiche.id][currentQuestion].title;
    setAnswers(prev => [...prev, { q: question, a: optionText }]);

    let dim = 'flow';
    if (currentQuestion >= 5 && currentQuestion < 10) dim = 'comm';
    else if (currentQuestion >= 10 && currentQuestion < 15) dim = 'sales';
    else if (currentQuestion >= 15) dim = 'scale';

    setDimensionScores(prev => ({ ...prev, [dim]: prev[dim] + score }));
    
    if (currentQuestion < nicheQuestions[currentNiche.id].length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('lead');
    }
  };

  const totalScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0);
  const scorePercentage = Math.min((totalScore / 600) * 100, 100);

  const getDimensionAnalyses = () => {
    return {
      flow: {
        label: "Flujo de Trabajo",
        icon: <Layers className="w-4 h-4" />,
        score: Math.round((dimensionScores.flow / 150) * 100),
        analysis: dimensionScores.flow < 75 ? "Colapso Manual: Su operación depende de tareas repetitivas." : "Eficiencia Estándar: Procesos en vía de automatización."
      },
      comm: {
        label: "Comunicación",
        icon: <MessageSquare className="w-4 h-4" />,
        score: Math.round((dimensionScores.comm / 150) * 100),
        analysis: dimensionScores.comm < 75 ? "Respuesta Reactiva: El mercado avanza más rápido que su equipo." : "Conectividad Activa: Buena base de interacción digital."
      },
      sales: {
        label: "Ventas & Datos",
        icon: <TrendingUp className="w-4 h-4" />,
        score: Math.round((dimensionScores.sales / 150) * 100),
        analysis: dimensionScores.sales < 75 ? "Venta Intuitiva: Fuga de rentabilidad por falta de métricas." : "Tracción Inteligente: Decisiones basadas en comportamiento."
      },
      scale: {
        label: "Escalabilidad",
        icon: <Cpu className="w-4 h-4" />,
        score: Math.round((dimensionScores.scale / 150) * 100),
        analysis: dimensionScores.scale < 75 ? "Estructura Frágil: El crecimiento actual pone en riesgo la calidad." : "Arquitectura de Escala: Listo para duplicar volumen."
      }
    };
  };

  const analyses = getDimensionAnalyses();

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStep('processing');
    
    try {
      const formData = new FormData();
      formData.append('nombre', leadData.nombre);
      formData.append('email', leadData.email);
      formData.append('whatsapp', leadData.whatsapp);
      formData.append('score', totalScore);
      formData.append('sector', currentSector);
      formData.append('nicho', currentNiche.name);
      formData.append('full_audit_data', JSON.stringify(answers));
      
      await fetch('/mail.php', { method: 'POST', body: formData });
    } catch (err) {
      console.error("Error enviando auditoría:", err);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setStep('result');
      }, 2000);
    }
  };

  const getSectorLabels = () => {
    if (currentSector === 'tourism') return { label: "Turismo de Élite", color: "text-[#FF7A18]" };
    if (currentSector === 'industry') return { label: "Industria & Logística", color: "text-patagonia-red" };
    return { label: "Retail & B2B", color: "text-patagonia-cyan" };
  };

  const labels = getSectorLabels();

  return (
    <section id="diagnostico" className={`${isModal ? 'py-10' : 'py-40 border-t border-white/5'} px-6 bg-patagonia-black relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-patagonia-gold/10 border border-patagonia-gold/20 mb-4">
            <Activity className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-patagonia-gold">
               {step === 'sector' ? "Iniciando Protocolo" : 
                step === 'niche' ? `Sector: ${labels.label}` :
                step === 'result' ? "Reporte Final de Inteligencia" : `Auditoría: ${currentNiche?.name}`}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-white italic leading-tight">
            Diagnóstico de <span className="text-patagonia-gold italic">Soberanía.</span>
          </h2>
        </div>

        <div className="relative min-h-[550px] bg-patagonia-surface/10 rounded-[4rem] border border-white/5 p-8 md:p-16 backdrop-blur-3xl overflow-hidden shadow-2xl flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 'sector' && (
              <motion.div key="sector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-heading font-light text-white">Seleccione su área de operación</h3>
                  <p className="text-patagonia-secondary text-sm">Iniciaremos el protocolo macro de su industria.</p>
                </div>
                <div className="grid gap-4">
                  {[
                    { id: 'tourism', name: "Turismo & Experiencias", icon: <Target className="w-6 h-6 text-[#FF7A18]" /> },
                    { id: 'industry', name: "Industria, Energía & Logística", icon: <Zap className="w-6 h-6 text-patagonia-red" /> },
                    { id: 'retail', name: "Retail & Servicios Profesionales", icon: <FileText className="w-6 h-6 text-patagonia-cyan" /> }
                  ].map(s => (
                    <button key={s.id} onClick={() => handleSectorSelect(s.id)} className="w-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-patagonia-gold/40 transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-patagonia-gold/10 transition-all">{s.icon}</div>
                        <span className="text-xl font-heading font-light text-white">{s.name}</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-patagonia-gold transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'niche' && (
              <motion.div key="niche" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-heading font-light text-white">Especifique su modelo de negocio</h3>
                  <p className="text-patagonia-secondary text-sm">Esto permitirá que el motor de IA ajuste las soluciones objetivas.</p>
                </div>
                <div className="grid gap-4">
                  {businessNiches[currentSector].map(n => (
                    <button key={n.id} onClick={() => handleNicheSelect(n)} className="w-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-patagonia-gold/40 transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-patagonia-gold/10 transition-all">{n.icon}</div>
                        <span className="text-xl font-heading font-light text-white">{n.name}</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-patagonia-gold transition-all" />
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep('sector')} className="w-full text-center text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-all font-bold">← Volver al sector anterior</button>
              </motion.div>
            )}

            {step === 'audit' && (
              <motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Protocolo {currentQuestion + 1} / 20</span>
                  <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-patagonia-gold" animate={{ width: `${((currentQuestion + 1) / 20) * 100}%` }} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-light text-white leading-tight">{nicheQuestions[currentNiche.id][currentQuestion].title}</h3>
                <div className="grid gap-4">
                  {nicheQuestions[currentNiche.id][currentQuestion].options.map((opt, idx) => (
                    <button key={idx} onClick={() => handleOptionSelect(opt.text, opt.score)} className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-patagonia-gold/30 hover:bg-patagonia-gold/5 transition-all group flex justify-between items-center">
                      <span className="text-lg font-light text-patagonia-secondary group-hover:text-white">{opt.text}</span>
                      <ArrowRight className="w-5 h-5 text-patagonia-gold opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'processing' && (
              <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center space-y-8 py-20 text-center">
                <div className="relative w-24 h-24">
                  <motion.div className="absolute inset-0 border-2 border-patagonia-gold rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} />
                  <Loader2 className="w-10 h-10 text-patagonia-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-heading text-white italic">Transmitiendo radiografía operativa...</h4>
                  <p className="text-patagonia-gold/60 text-xs animate-pulse">Generando reporte extendido de 20+ páginas</p>
                </div>
              </motion.div>
            )}

            {step === 'lead' && (
              <motion.div key="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-12">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-patagonia-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"><Mail className="w-8 h-8 text-patagonia-gold" /></div>
                  <h3 className="text-4xl font-heading font-light text-white leading-tight">Auditoría Finalizada.</h3>
                  <p className="text-patagonia-secondary max-w-md mx-auto font-light italic">Sus respuestas han sido capturadas. Ingrese sus datos para recibir el **Informe Táctico Completo** en su email.</p>
                </div>
                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
                  <input required type="text" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white focus:border-patagonia-gold" onChange={e => setLeadData({...leadData, nombre: e.target.value})} />
                  <input required type="email" placeholder="Email corporativo" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white focus:border-patagonia-gold" onChange={e => setLeadData({...leadData, email: e.target.value})} />
                  <input required type="tel" placeholder="WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white focus:border-patagonia-gold" onChange={e => setLeadData({...leadData, whatsapp: e.target.value})} />
                  <button disabled={isSubmitting} className="btn-primary w-full py-5 text-[10px] tracking-[0.4em] font-black uppercase disabled:opacity-50">
                    {isSubmitting ? "Transmitiendo..." : "Obtener Reporte de Inteligencia"}
                  </button>
                </form>
              </motion.div>
            )}

            {step === 'result' && (
              <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                {/* Alerta de Informe en Email */}
                <div className="p-4 rounded-2xl bg-patagonia-gold text-black flex items-center gap-4 animate-bounce">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <p className="text-[10px] font-black uppercase tracking-widest">Su Informe Detallado (20+ páginas) está siendo enviado a su email.</p>
                </div>

                {/* Header Resultado */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="relative w-40 h-40 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                      <motion.circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-patagonia-gold" strokeDasharray={452.39} initial={{ strokeDashoffset: 452.39 }} animate={{ strokeDashoffset: 452.39 - (452.39 * scorePercentage) / 100 }} transition={{ duration: 2 }} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-heading text-white">{Math.round(scorePercentage)}%</span>
                      <span className="text-[6px] uppercase tracking-widest text-patagonia-gold font-bold">Madurez Total</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-heading font-light text-white leading-tight">Estado: <span className={`italic ${labels.color}`}>{scorePercentage > 75 ? "Élite Operativa" : scorePercentage > 50 ? "Tracción Media" : "Fricción Crítica"}</span></h3>
                    <p className="text-patagonia-secondary font-light italic leading-relaxed text-lg">"Su ecosistema de <span className="text-white">{currentNiche?.name}</span> presenta oportunidades de optimización inmediata a través de arquitectura IA."</p>
                  </div>
                </div>

                {/* Dashboard Dimensional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.values(analyses).map((dim, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-patagonia-gold/10 text-patagonia-gold">{dim.icon}</div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white">{dim.label}</span>
                        </div>
                        <span className="text-xl font-heading text-patagonia-gold">{dim.score}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-patagonia-gold" initial={{ width: 0 }} animate={{ width: `${dim.score}%` }} transition={{ delay: i * 0.2 }} />
                      </div>
                      <p className="text-[11px] text-patagonia-secondary font-light italic">{dim.analysis}</p>
                    </div>
                  ))}
                </div>

                {/* Hoja de Ruta */}
                <div className="p-8 rounded-[3rem] bg-white/5 border border-white/5 space-y-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-patagonia-gold" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Roadmap Táctico Propuesto</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { t: "Fase 1: Inmediata", d: "Sistematización de atención vía IA 24/7." },
                      { t: "Fase 2: Estructural", d: "Digitalización de flujos operativos en Nube." },
                      { t: "Fase 3: Escala", d: "Dashboard de Inteligencia y ROI en vivo." }
                    ].map((f, i) => (
                      <div key={i} className="space-y-2">
                        <span className="text-[8px] font-black uppercase text-patagonia-gold tracking-widest">{f.t}</span>
                        <p className="text-xs text-patagonia-secondary font-light leading-relaxed">{f.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Final */}
                <div className="p-8 rounded-[3rem] bg-patagonia-gold text-black flex flex-col justify-center items-center text-center space-y-6 shadow-[0_20px_50px_rgba(250,204,21,0.2)]">
                  <ShieldCheck className="w-12 h-12" />
                  <h4 className="text-2xl font-heading font-bold leading-tight">¿Listo para ejecutar esta transformación?</h4>
                  <a href={`https://wa.me/56995684198?text=Franco, obtuve un ${Math.round(scorePercentage)}% en mi auditoría de ${currentNiche?.name}. Quiero agendar la sesión de despliegue para las 3 fases.`} className="w-full py-5 bg-black text-white rounded-full text-[10px] tracking-[0.4em] font-black uppercase hover:scale-105 transition-all">Agendar Sesión de Despliegue</a>
                  <p className="text-[8px] uppercase font-bold tracking-widest opacity-60">Consultoría sin costo para empresas de Magallanes</p>
                </div>

                {/* Footer Regreso */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8">
                   <button onClick={() => setStep('sector')} className="text-white/50 text-[10px] tracking-[0.3em] uppercase hover:text-patagonia-gold transition-all font-bold">Reiniciar Auditoría</button>
                   <button 
                    onClick={() => {
                      if (isModal) {
                        window.location.reload();
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 hover:text-white transition-all font-black"
                   >
                     <Home className="w-3 h-3" />
                     Finalizar y Volver al Inicio
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DigitalDiagnostic;
