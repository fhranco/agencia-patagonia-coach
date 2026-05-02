const sectorQuestions = {
  tourism: [
    { id: 1, title: "¿Cómo gestionan hoy las consultas que llegan fuera de horario de oficina?", options: [{ text: "Quedan en espera hasta el día siguiente", score: 5 }, { text: "Mensaje automático genérico", score: 15 }, { text: "IA resuelve dudas y pre-califica la reserva", score: 30 }] },
    { id: 2, title: "¿Cuánto tiempo pierde su equipo actualizando disponibilidad en distintos portales?", options: [{ text: "Es un proceso manual y propenso a errores", score: 5 }, { text: "Usamos un sistema pero requiere revisión manual", score: 15 }, { text: "Sincronización total automática en tiempo real", score: 30 }] },
    { id: 3, title: "¿Cómo envían la información previa al viaje a sus huéspedes?", options: [{ text: "Enviamos archivos manuales por WhatsApp/Mail", score: 5 }, { text: "Tenemos plantillas pero el envío es manual", score: 15 }, { text: "Portal de cliente automático con toda la info", score: 30 }] },
    { id: 4, title: "¿Cómo capturan fotos y videos de las experiencias de sus clientes?", options: [{ text: "Dependemos de lo que los guías suban", score: 5 }, { text: "Intentamos pedir material de vez en cuando", score: 15 }, { text: "Sistema de captura y curación automática", score: 30 }] },
    { id: 5, title: "¿Cómo miden la satisfacción real después del tour/estadía?", options: [{ text: "Si no hay quejas, asumimos que todo está bien", score: 5 }, { text: "Pedimos reseña manualmente por WhatsApp", score: 15 }, { text: "Encuesta de satisfacción con reporte de IA", score: 30 }] },
    { id: 6, title: "¿Qué pasa con los leads que preguntan precios y no vuelven a escribir?", options: [{ text: "Se pierden para siempre", score: 5 }, { text: "Intentamos re-contactar si hay tiempo", score: 15 }, { text: "Flujo de nutrición automático para cerrar la venta", score: 30 }] },
    { id: 7, title: "¿Cómo gestionan las solicitudes especiales (dietas, traslados, etc)?", options: [{ text: "En cuadernos o chats de WhatsApp", score: 5 }, { text: "En una planilla Excel compartida", score: 15 }, { text: "Ficha digital única conectada a la operación", score: 30 }] },
    { id: 8, title: "¿Su equipo habla inglés fluido para cerrar ventas internacionales?", options: [{ text: "Es una barrera crítica hoy", score: 5 }, { text: "Algunos lo manejan pero con lentitud", score: 15 }, { text: "IA bilingüe cierra ventas 24/7 sin errores", score: 30 }] },
    { id: 9, title: "¿Cómo se ve su proceso de check-in hoy?", options: [{ text: "Llenado de fichas de papel al llegar", score: 5 }, { text: "Registro en computadora con el cliente delante", score: 15 }, { text: "Check-in digital previo al arribo", score: 30 }] },
    { id: 10, title: "¿Cómo aseguran que los guías sigan el protocolo de marca?", options: [{ text: "Confiamos en su criterio personal", score: 5 }, { text: "Reuniones de coordinación semanales", score: 15 }, { text: "Checklist digital obligatorio por salida", score: 30 }] },
    { id: 11, title: "¿Cuál es el costo de perder una reserva por no responder rápido?", options: [{ text: "No lo tenemos medido", score: 5 }, { text: "Sabemos que es alto pero no hay solución", score: 15 }, { text: "Eliminado: la respuesta es inmediata", score: 30 }] },
    { id: 12, title: "¿Cómo promocionan sus servicios a clientes antiguos?", options: [{ text: "No tenemos una base de datos activa", score: 5 }, { text: "Enviamos un mail masivo de vez en cuando", score: 15 }, { text: "Ofertas personalizadas según su historial", score: 30 }] },
    { id: 13, title: "¿Cómo gestionan las comisiones de sus agencias aliadas?", options: [{ text: "Cálculos manuales a fin de mes", score: 5 }, { text: "Planilla de control semi-manual", score: 15 }, { text: "Liquidación automática vía sistema", score: 30 }] },
    { id: 14, title: "¿Qué tan difícil es cambiar un itinerario de último minuto?", options: [{ text: "Un caos de llamadas y mensajes", score: 5 }, { text: "Se logra pero con mucho estrés del equipo", score: 15 }, { text: "Actualización centralizada instantánea", score: 30 }] },
    { id: 15, title: "¿Cómo atraen clientes de nicho (ej: Birdwatchers, Fotógrafos)?", options: [{ text: "No tenemos estrategia de nicho", score: 5 }, { text: "Publicidad genérica en redes sociales", score: 15 }, { text: "Embudos específicos para cada micro-segmento", score: 30 }] },
    { id: 16, title: "¿Su equipo administrativo dedica tiempo a tareas de 'copiar y pegar'?", options: [{ text: "Casi todo el día", score: 5 }, { text: "Un par de horas al día", score: 15 }, { text: "Nada, todo está automatizado", score: 30 }] },
    { id: 17, title: "¿Cómo protegen los datos de tarjetas de sus clientes?", options: [{ text: "Los anotamos o pedimos por foto", score: 5 }, { text: "Usamos pasarelas básicas", score: 15 }, { text: "Entorno encriptado de alta seguridad", score: 30 }] },
    { id: 18, title: "¿Cómo sabe qué canal de venta es el más rentable hoy?", options: [{ text: "Por intuición", score: 5 }, { text: "Revisando reportes de fin de mes", score: 15 }, { text: "Atribución exacta en tiempo real", score: 30 }] },
    { id: 19, title: "¿Su equipo se siente abrumado en temporada alta?", options: [{ text: "Siempre, al borde del colapso", score: 5 }, { text: "Es estresante pero se maneja", score: 15 }, { text: "Procesos fluidos gracias a la tecnología", score: 30 }] },
    { id: 20, title: "¿Cuál es su mayor freno para duplicar sus ventas?", options: [{ text: "Falta de personal e infraestructura", score: 10 }, { text: "Falta de visibilidad internacional", score: 20 }, { text: "Falta de sistemas escalables", score: 30 }] }
  ],
  industry: [
    { id: 1, title: "¿Cómo se reportan hoy las novedades desde el terreno/planta?", options: [{ text: "Llamadas, mensajes de voz o papel", score: 5 }, { text: "Grupo de WhatsApp corporativo", score: 15 }, { text: "Formulario digital con geolocalización e IA", score: 30 }] },
    { id: 2, title: "¿Cuánto tiempo tarda la oficina en procesar un reporte de terreno?", options: [{ text: "Días hasta que llega el papel", score: 5 }, { text: "Horas, si alguien lo tipea rápido", score: 15 }, { text: "Cero: sincronización instantánea", score: 30 }] },
    { id: 3, title: "¿Cómo gestionan el mantenimiento preventivo de sus activos?", options: [{ text: "Cuando algo falla (Reactivo)", score: 5 }, { text: "Calendario manual en la oficina", score: 15 }, { text: "Alertas predictivas automáticas", score: 30 }] },
    { id: 4, title: "¿Cómo aseguran que se sigan los protocolos de seguridad (EPP)?", options: [{ text: "Inspecciones visuales aleatorias", score: 5 }, { text: "Charlas de seguridad matutinas", score: 15 }, { text: "Validación digital por tarea iniciada", score: 30 }] },
    { id: 5, title: "¿Cómo se enteran los clientes del estado de su servicio/logística?", options: [{ text: "Nos tienen que llamar para preguntar", score: 5 }, { text: "Les enviamos un mail cuando podemos", score: 15 }, { text: "Portal de tracking en tiempo real", score: 30 }] },
    { id: 6, title: "¿Qué pasa si se pierde una hoja de registro en el campo?", options: [{ text: "Se pierde la info y el rastro", score: 5 }, { text: "Intentamos reconstruirla de memoria", score: 15 }, { text: "Imposible: todo está respaldado en la nube", score: 30 }] },
    { id: 7, title: "¿Cómo coordinan los turnos y descansos de su equipo?", options: [{ text: "Pizarra manual o cuadrícula impresa", score: 5 }, { text: "Excel compartido que pocos miran", score: 15 }, { text: "App de gestión de turnos centralizada", score: 30 }] },
    { id: 8, title: "¿Cómo gestionan las órdenes de compra y facturación?", options: [{ text: "Proceso manual con carpetas físicas", score: 5 }, { text: "Digitalizado básico (PDFs sueltos)", score: 15 }, { text: "Flujo ERP automatizado de punta a punta", score: 30 }] },
    { id: 9, title: "¿Cómo analizan las fallas recurrentes en su operación?", options: [{ text: "No tenemos registro histórico", score: 5 }, { text: "Revisando archivos viejos", score: 15 }, { text: "IA analiza patrones de error automáticamente", score: 30 }] },
    { id: 10, title: "¿Cómo protegen la propiedad intelectual de sus procesos?", options: [{ text: "Está todo en la cabeza de los empleados", score: 5 }, { text: "Manuales impresos que nadie lee", score: 15 }, { text: "Wiki corporativa dinámica y protegida", score: 30 }] },
    { id: 11, title: "¿Cuánto tiempo pierde su equipo en reuniones de coordinación?", options: [{ text: "Demasiado tiempo improductivo", score: 5 }, { text: "Lo justo, pero falta claridad", score: 15 }, { text: "Reuniones mínimas gracias a datos claros", score: 30 }] },
    { id: 12, title: "¿Cómo gestionan el stock de insumos críticos?", options: [{ text: "Revisión visual cuando falta algo", score: 5 }, { text: "Planilla Excel manual", score: 15 }, { text: "Alertas de stock mínimo automáticas", score: 30 }] },
    { id: 13, title: "¿Cómo atraen nuevos contratos industriales?", options: [{ text: "Solo por relaciones previas y licitaciones", score: 5 }, { text: "Presentaciones comerciales estándar", score: 15 }, { text: "Estrategia de autoridad técnica digital B2B", score: 30 }] },
    { id: 14, title: "¿Qué tan rápido pueden generar un reporte para un cliente?", options: [{ text: "Días de recopilación de datos", score: 5 }, { text: "Horas de orden y diseño", score: 15 }, { text: "Segundos, con un solo clic", score: 30 }] },
    { id: 15, title: "¿Cómo aseguran la continuidad si un operario clave renuncia?", options: [{ text: "Perdemos mucho conocimiento y tiempo", score: 5 }, { text: "El proceso se ralentiza por meses", score: 15 }, { text: "Conocimiento sistematizado, curva mínima", score: 30 }] },
    { id: 16, title: "¿Sus equipos están conectados entre sí (Software/Hardware)?", options: [{ text: "Son islas de información separadas", score: 5 }, { text: "Algunas conexiones básicas", score: 15 }, { text: "Ecosistema totalmente integrado", score: 30 }] },
    { id: 17, title: "¿Cómo monitorean el consumo de combustible o energía?", options: [{ text: "Revisando facturas a fin de mes", score: 5 }, { text: "Registro manual diario", score: 15 }, { text: "Telemetría en tiempo real", score: 30 }] },
    { id: 18, title: "¿Cuál es el nivel de digitalización de sus proveedores?", options: [{ text: "Manual y tradicional", score: 5 }, { text: "Usan mail pero no sistemas", score: 15 }, { text: "Integrados digitalmente con nosotros", score: 30 }] },
    { id: 19, title: "¿Su empresa es atractiva para el talento joven técnico?", options: [{ text: "No, nos ven como anticuados", score: 5 }, { text: "Estamos mejorando la imagen", score: 15 }, { text: "Sí, por nuestra cultura tecnológica", score: 30 }] },
    { id: 20, title: "¿Cuál es su mayor riesgo operativo hoy?", options: [{ text: "Error humano y falta de datos", score: 10 }, { text: "Falta de repuestos o personal", score: 20 }, { text: "Inercia y falta de innovación", score: 30 }] }
  ],
  retail: [
    { id: 1, title: "¿Cómo se sincroniza su inventario físico con su web?", options: [{ text: "A mano, producto por producto", score: 5 }, { text: "Carga masiva semanal", score: 15 }, { text: "Sincronización instantánea real", score: 30 }] },
    { id: 2, title: "¿Qué pasa cuando un cliente abandona el carrito de compra?", options: [{ text: "Nada, se pierde la venta", score: 5 }, { text: "Enviamos un mail si tenemos el dato", score: 15 }, { text: "Flujo de recuperación de IA automático", score: 30 }] },
    { id: 3, title: "¿Cómo gestionan las devoluciones o reclamos hoy?", options: [{ text: "Llamadas y discusiones eternas", score: 5 }, { text: "Ticketera básica de soporte", score: 15 }, { text: "Gestión autónoma vía portal de cliente", score: 30 }] },
    { id: 4, title: "¿Cómo recomiendan productos a sus clientes actuales?", options: [{ text: "No hacemos recomendaciones", score: 5 }, { text: "Lo que el vendedor cree mejor", score: 15 }, { text: "Motor de IA basado en comportamiento", score: 30 }] },
    { id: 5, title: "¿Cuánto tiempo pierde su equipo editando fotos de productos?", options: [{ text: "Horas de diseño manual por foto", score: 5 }, { text: "Usamos filtros pero es lento", score: 15 }, { text: "IA genera ambientes y retoques en segundos", score: 30 }] },
    { id: 6, title: "¿Cómo capturan datos de clientes que compran en tienda física?", options: [{ text: "No capturamos datos", score: 5 }, { text: "Pedimos el mail en caja a veces", score: 15 }, { text: "Ecosistema unificado Omnicanal", score: 30 }] },
    { id: 7, title: "¿Cuál es su estrategia de fidelización (lealtad)?", options: [{ text: "Ninguna, solo esperamos que vuelvan", score: 5 }, { text: "Descuentos esporádicos masivos", score: 15 }, { text: "Programa de recompensas inteligente", score: 30 }] },
    { id: 8, title: "¿Cómo saben qué producto dejar de comprar por falta de rotación?", options: [{ text: "Por el espacio que sobra en bodega", score: 5 }, { text: "Reporte de ventas de fin de mes", score: 15 }, { text: "Análisis predictivo de stock", score: 30 }] },
    { id: 9, title: "¿Cómo gestionan la pauta digital (FB/IG Ads)?", options: [{ text: "Botón 'Promocionar publicación' a veces", score: 5 }, { text: "Campañas estándar de tráfico", score: 15 }, { text: "Optimización por eventos de conversión real", score: 30 }] },
    { id: 10, title: "¿Su equipo sabe cuánto vendió hoy antes de cerrar?", options: [{ text: "Hasta que cuadran la caja", score: 5 }, { text: "Revisando el sistema básico", score: 15 }, { text: "Dashboard móvil en tiempo real", score: 30 }] },
    { id: 11, title: "¿Cómo atraen clientes nuevos de forma constante?", options: [{ text: "Dependemos de que pasen por fuera", score: 5 }, { text: "Posteamos en redes sociales diario", score: 15 }, { text: "Máquina de adquisición automatizada", score: 30 }] },
    { id: 12, title: "¿Qué tan difícil es abrir una nueva sucursal o canal?", options: [{ text: "Meses de caos y configuración manual", score: 5 }, { text: "Es factible pero lento", score: 15 }, { text: "Proceso 'Plug & Play' escalable", score: 30 }] },
    { id: 13, title: "¿Cómo se comunican con sus proveedores?", options: [{ text: "Llamadas y WhatsApp caóticos", score: 5 }, { text: "Correo electrónico formal", score: 15 }, { text: "Portal de proveedores automatizado", score: 30 }] },
    { id: 14, title: "¿Cómo aseguran que sus vendedores sigan el speech de venta?", options: [{ text: "Confiamos en su carisma", score: 5 }, { text: "Auditorías presenciales aleatorias", score: 15 }, { text: "Entrenamiento asistido por IA", score: 30 }] },
    { id: 15, title: "¿Qué porcentaje de sus ventas son recurrentes?", options: [{ text: "Muy bajo, siempre buscamos nuevos", score: 10 }, { text: "Alrededor del 20%", score: 20 }, { text: "Más del 50% (Lealtad alta)", score: 30 }] },
    { id: 16, title: "¿Cómo gestionan los envíos a última milla?", options: [{ text: "Enviamos a alguien del equipo a mano", score: 5 }, { text: "Usamos empresas externas manualmente", score: 15 }, { text: "Integración logística total automatizada", score: 30 }] },
    { id: 17, title: "¿Su web carga en menos de 2 segundos?", options: [{ text: "No, es muy lenta", score: 5 }, { text: "Carga bien pero podría mejorar", score: 15 }, { text: "Velocidad de élite optimizada", score: 30 }] },
    { id: 18, title: "¿Cómo protegen su marca de copias o competencia desleal?", options: [{ text: "No hacemos nada", score: 5 }, { text: "Monitoreo manual básico", score: 15 }, { text: "Vigilancia digital activa", score: 30 }] },
    { id: 19, title: "¿Cuál es el valor promedio de vida de su cliente (LTV)?", options: [{ text: "No tengo idea", score: 5 }, { text: "Lo calculamos anualmente", score: 15 }, { text: "Dato clave optimizado a diario", score: 30 }] },
    { id: 20, title: "¿Qué le impide ser el líder absoluto de su rubro?", options: [{ text: "Falta de capital", score: 10 }, { text: "Falta de ubicación física", score: 20 }, { text: "Falta de ecosistema digital", score: 30 }] }
  ]
};

const DigitalDiagnostic = () => {
  const [step, setStep] = useState('sector'); // 'sector', 'audit', 'processing', 'lead', 'result'
  const [currentSector, setCurrentSector] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [leadData, setLeadData] = useState({ nombre: '', email: '', whatsapp: '' });

  const handleSectorSelect = (sector) => {
    setCurrentSector(sector);
    setStep('audit');
  };

  const handleOptionSelect = (score) => {
    const nextScore = totalScore + score;
    setTotalScore(nextScore);
    
    if (currentQuestion < sectorQuestions[currentSector].length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('lead');
    }
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setStep('processing');
    
    // Background mail dispatch
    try {
      const formData = new FormData();
      formData.append('nombre', leadData.nombre);
      formData.append('email', leadData.email);
      formData.append('whatsapp', leadData.whatsapp);
      formData.append('score', totalScore);
      formData.append('sector', currentSector);
      formData.append('form_type', `Auditoría ${currentSector}`);
      fetch('/mail.php', { method: 'POST', body: formData });
    } catch (e) {}

    setTimeout(() => setStep('result'), 3000);
  };

  const scorePercentage = Math.min((totalScore / 600) * 100, 100);

  const getSectorLabels = () => {
    if (currentSector === 'tourism') return { label: "Turismo de Élite", color: "text-[#FF7A18]" };
    if (currentSector === 'industry') return { label: "Industria & Logística", color: "text-patagonia-red" };
    return { label: "Retail & B2B", color: "text-patagonia-cyan" };
  };

  const labels = getSectorLabels();

  return (
    <section id="diagnostico" className="py-40 px-6 bg-patagonia-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-patagonia-gold/10 border border-patagonia-gold/20 mb-4">
            <Activity className="w-4 h-4 text-patagonia-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-patagonia-gold">
               {step === 'sector' ? "Iniciando Protocolo de Auditoría" : `Auditoría en Curso: ${labels.label}`}
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
                  <p className="text-patagonia-secondary text-sm">Cargaremos el protocolo de auditoría específico para su nicho.</p>
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

            {step === 'audit' && (
              <motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Protocolo {currentQuestion + 1} / 20</span>
                  <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-patagonia-gold" animate={{ width: `${((currentQuestion + 1) / 20) * 100}%` }} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-light text-white leading-tight">{sectorQuestions[currentSector][currentQuestion].title}</h3>
                <div className="grid gap-4">
                  {sectorQuestions[currentSector][currentQuestion].options.map((opt, idx) => (
                    <button key={idx} onClick={() => handleOptionSelect(opt.score)} className="w-full text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-patagonia-gold/30 hover:bg-patagonia-gold/5 transition-all group flex justify-between items-center">
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
                  <Zap className="w-10 h-10 text-patagonia-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <h4 className="text-xl font-heading text-white italic">Analizando fricción operativa...</h4>
                <p className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-black">Auditando flujos de trabajo en Magallanes</p>
              </motion.div>
            )}

            {step === 'lead' && (
              <motion.div key="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-12">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-patagonia-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"><FileText className="w-8 h-8 text-patagonia-gold" /></div>
                  <h3 className="text-4xl font-heading font-light text-white leading-tight">Auditoría Finalizada.</h3>
                  <p className="text-patagonia-secondary max-w-md mx-auto font-light italic">Su reporte estratégico de {labels.label} está listo para ser generado.</p>
                </div>
                <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
                  <input required type="text" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white focus:border-patagonia-gold" onChange={e => setLeadData({...leadData, nombre: e.target.value})} />
                  <input required type="email" placeholder="Email corporativo" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white focus:border-patagonia-gold" onChange={e => setLeadData({...leadData, email: e.target.value})} />
                  <input required type="tel" placeholder="WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white focus:border-patagonia-gold" onChange={e => setLeadData({...leadData, whatsapp: e.target.value})} />
                  <button className="btn-primary w-full py-5 text-[10px] tracking-[0.4em] font-black uppercase">Obtener Reporte de Inteligencia</button>
                </form>
              </motion.div>
            )}

            {step === 'result' && (
              <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12 text-center md:text-left">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="relative w-40 h-40 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                      <motion.circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-patagonia-gold" strokeDasharray={452.39} initial={{ strokeDashoffset: 452.39 }} animate={{ strokeDashoffset: 452.39 - (452.39 * scorePercentage) / 100 }} transition={{ duration: 2 }} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-heading text-white">{Math.round(scorePercentage)}%</span>
                      <span className="text-[6px] uppercase tracking-widest text-patagonia-gold font-bold">Eficiencia</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-heading font-light text-white leading-tight">Estado: <span className={`italic ${labels.color}`}>{scorePercentage > 70 ? "Élite Operativa" : "Fricción Crítica"}</span></h3>
                    <p className="text-patagonia-secondary font-light italic leading-relaxed">"Su operación en {labels.label} presenta fugas de rentabilidad por procesos manuales que podrían ser resueltos con arquitectura digital."</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row gap-6 justify-center">
                   <a href={`https://wa.me/56995684198?text=Franco, acabo de completar la auditoría de ${labels.label} con un score de ${Math.round(scorePercentage)}%. Me interesa implementar el roadmap.`} className="btn-primary px-12 py-5 text-[10px] tracking-[0.3em] font-black uppercase text-center">Agendar Sesión Estratégica</a>
                   <button onClick={() => setStep('sector')} className="px-12 py-5 rounded-full border border-white/10 text-white/40 text-[10px] tracking-[0.3em] uppercase hover:text-white transition-all">Reiniciar Auditoría</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DigitalDiagnostic;iv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DigitalDiagnostic;
