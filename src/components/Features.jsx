import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderOpen, BarChart3, PenTool, CalendarDays, CheckCircle2, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════ */
/* MICRO-UI: File System Visualizer       */
/* ═══════════════════════════════════════ */
function FileSystemUI() {
    const files = [
        { icon: FolderOpen, name: 'auditoria_cultura.md', status: 'SYNCED', color: 'text-status-green' },
        { icon: BarChart3, name: 'estrategia_negocio.csv', status: 'SYNCED', color: 'text-status-green' },
        { icon: PenTool, name: 'blueprint_tecnologico.md', status: 'ACTIVE', color: 'text-accent-red' },
    ];

    return (
        <div className="mt-6 space-y-2">
            {files.map((file, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between bg-text-black/5 rounded-brutal px-3 py-2"
                >
                    <div className="flex items-center gap-2">
                        <file.icon size={14} className="text-text-black/60" />
                        <span className="font-mono text-[11px] text-text-black/80">{file.name}</span>
                    </div>
                    <span className={`font-mono text-[9px] font-bold ${file.color}`}>{file.status}</span>
                </motion.div>
            ))}
        </div>
    );
}

/* ═══════════════════════════════════════ */
/* MICRO-UI: Calendar Grid                */
/* ═══════════════════════════════════════ */
function CalendarUI() {
    const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    const schedule = [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0];

    return (
        <div className="mt-6">
            <div className="grid grid-cols-7 gap-1.5">
                {days.map((d) => (
                    <span key={d} className="font-mono text-[9px] text-center text-text-black/40">{d}</span>
                ))}
                {schedule.map((active, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.03, duration: 0.3 }}
                        viewport={{ once: true }}
                        className={`aspect-square rounded-sm ${active ? 'bg-accent-red' : 'bg-text-black/5'
                            }`}
                    />
                ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
                <CalendarDays size={12} className="text-accent-red" />
                <span className="font-mono text-[9px] text-text-black/50">PLATAFORMA_ACADEMIA // LIVE</span>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════ */
/* MICRO-UI: Status Stepper               */
/* ═══════════════════════════════════════ */
function StepperUI() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['LEARN', 'APPLY', 'ADAPT', 'LEAD'];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-6">
            <div className="flex items-center gap-1">
                {steps.map((step, idx) => (
                    <div key={step} className="flex items-center gap-1">
                        <motion.div
                            animate={{
                                backgroundColor: idx <= activeStep ? '#E63B2E' : 'rgba(17,17,17,0.1)',
                                scale: idx === activeStep ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center w-auto px-2 py-1 rounded-sm"
                        >
                            <span
                                className={`font-mono text-[9px] font-bold ${idx <= activeStep ? 'text-white' : 'text-text-black/40'
                                    }`}
                            >
                                {step}
                            </span>
                            {step === 'LEAD' && idx <= activeStep && (
                                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-white led-pulse inline-block"></span>
                            )}
                        </motion.div>
                        {idx < steps.length - 1 && (
                            <motion.div
                                animate={{
                                    backgroundColor: idx < activeStep ? '#E63B2E' : 'rgba(17,17,17,0.1)',
                                }}
                                className="w-4 h-0.5"
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
                <CheckCircle2 size={12} className="text-status-green" />
                <span className="font-mono text-[9px] text-text-black/50">TRANSFORMACIÓN_CULTURAL // ACTIVE</span>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════ */
/* FEATURES — The Three Pillars           */
/* ═══════════════════════════════════════ */
const features = [
    {
        id: '01',
        title: 'TRANSFORMACIÓN ORGANIZACIONAL',
        copy: 'Ayudamos a las organizaciones a mejorar sus procesos, eficiencia y resultados, mientras formamos a sus equipos en Marketing Digital e Inteligencia Artificial aplicada al negocio. Combinamos consultoría estratégica y formación técnica.',
        MicroUI: FileSystemUI,
        icon: FolderOpen,
    },
    {
        id: '02',
        title: 'FORMACIÓN PRÁCTICA DIGITAL',
        copy: 'Nuestra Academia de Marketing Digital e Inteligencia Artificial ayuda a empresas y profesionales a adquirir capacidades estratégicas y herramientas tecnológicas con aplicación directa en negocios reales.',
        MicroUI: CalendarUI,
        icon: CalendarDays,
    },
    {
        id: '03',
        title: 'PUENTE DE TRANSFORMACIÓN',
        copy: 'Integramos desarrollo organizacional, liderazgo y tecnología. Formamos en Marketing IA mientras acompañamos a las organizaciones en procesos de transformación cultural y estratégica.',
        MicroUI: StepperUI,
        icon: Zap,
    },
];

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.feature-card',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-paper px-6 md:px-12 lg:px-20 py-24 md:py-32">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <div className="font-mono text-[10px] tracking-[0.2em] text-text-black/40 uppercase mb-4">
                    ADN PATAGONIACOACH // PROPUESTA DE VALOR
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    NUESTROS <span className="font-serif-italic text-accent-red">PILARES.</span>
                    <br />
                    UN ECOSISTEMA.
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
                {features.map((feature, idx) => (
                    <div
                        key={feature.id}
                        className={`feature-card border-brutal bg-surface-white p-6 md:p-8 ${idx < features.length - 1 ? 'md:border-r-0' : ''
                            } rounded-none first:rounded-l-brutal last:rounded-r-brutal`}
                        style={{ opacity: 0 }}
                    >
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-[10px] text-accent-red font-bold">
                                [{feature.id}]
                            </span>
                            <feature.icon size={18} className="text-text-black/30" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold tracking-tight mb-3 leading-tight">
                            {feature.title}
                        </h3>

                        {/* Copy */}
                        <p className="text-sm text-text-black/60 leading-relaxed">
                            {feature.copy}
                        </p>

                        {/* Micro-UI */}
                        <feature.MicroUI />
                    </div>
                ))}
            </div>
        </section>
    );
}
