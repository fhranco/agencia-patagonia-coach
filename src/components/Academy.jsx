import { motion } from 'framer-motion';
import { Play, Layers, Cpu, Globe } from 'lucide-react';

const Academy = () => {
  const courses = [
    {
      title: "IA para Ejecutivos",
      category: "Management",
      progress: 65,
      icon: <Cpu className="w-6 h-6" />,
      tag: "Trending"
    },
    {
      title: "Prompt Engineering",
      category: "Technical",
      progress: 40,
      icon: <Layers className="w-6 h-6" />,
      tag: "Bestseller"
    },
    {
      title: "Marketing Automations",
      category: "Growth",
      progress: 90,
      icon: <Globe className="w-6 h-6" />,
      tag: "Advanced"
    }
  ];

  return (
    <section className="section-container bg-patagonia-void/50">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4">
          <span className="text-patagonia-red font-heading tracking-widest text-sm uppercase">Academy Grid</span>
          <h2 className="text-5xl font-bold">Formación Práctica</h2>
        </div>
        <button className="btn-secondary">Ver todo el catálogo</button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card group flex flex-col h-full hover:border-patagonia-cyan/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-xl bg-white/5 group-hover:bg-patagonia-cyan/20 transition-colors">
                {course.icon}
              </div>
              <span className="text-[10px] uppercase tracking-widest bg-patagonia-red px-2 py-1 rounded-full text-white">
                {course.tag}
              </span>
            </div>

            <div className="mt-auto space-y-6">
              <div>
                <span className="text-xs text-white/40 uppercase tracking-widest">{course.category}</span>
                <h3 className="text-2xl font-bold mt-2">{course.title}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/60">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${course.progress}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-patagonia-cyan shadow-[0_0_10px_#00E5FF]"
                  />
                </div>
              </div>

              <button className="w-full py-4 bg-white/5 group-hover:bg-white text-white group-hover:text-black rounded-btn font-heading text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                <Play className="w-3 h-3 fill-current" /> Continuar Aprendiendo
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Academy;
