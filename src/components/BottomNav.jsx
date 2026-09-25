import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Grid, Activity, MessageSquare } from 'lucide-react';
import { openDigitalDiagnostic, getWhatsAppUrl } from '../constants/contact';

const navItems = [
  { label: 'Inicio', path: '/', icon: Home },
  { label: 'Servicios', path: '/servicios/desarrollo-web', icon: Grid },
  { label: 'Diagnóstico', action: 'diagnostic', icon: Activity, dataCta: 'diagnostic' },
  { label: 'Contacto', path: getWhatsAppUrl('Hola PatagoniaCoach, me gustaría coordinar una conversación.'), isExternal: true, icon: MessageSquare, dataCta: 'whatsapp' }
];

const BottomNav = () => {
  const location = useLocation();
  const isHomeOrBaseline = location.pathname === '/' || location.pathname.startsWith('/lab/noa-baseline');

  if (isHomeOrBaseline) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[190] px-4 pb-4">
      {/* Subtle glow behind the nav bar */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-patagonia-gold/5 blur-[20px] rounded-full pointer-events-none" />

      <nav className="flex justify-around items-center h-20 bg-patagonia-black/80 backdrop-blur-2xl border border-white/5 rounded-2xl px-2 shadow-2xl relative">
        {navItems.map((item, i) => {
          const isSelected = item.path && !item.isExternal && (
            (item.path === '/' && location.pathname === '/') || 
            (item.path !== '/' && location.pathname.startsWith(item.path.split('#')[0]))
          );

          const content = (
            <>
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isSelected 
                    ? 'text-patagonia-gold bg-patagonia-gold/10' 
                    : 'text-patagonia-secondary hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className={`text-[8px] font-black uppercase tracking-[0.15em] ${
                isSelected ? 'text-patagonia-gold' : 'text-patagonia-secondary/60'
              }`}>
                {item.label}
              </span>
            </>
          );

          if (item.action === 'diagnostic') {
            return (
              <button
                key={i}
                type="button"
                onClick={() => openDigitalDiagnostic()}
                data-cta={item.dataCta}
                className="flex flex-col items-center gap-1 text-center flex-1 py-1 cursor-pointer"
              >
                {content}
              </button>
            );
          }

          if (item.isExternal) {
            return (
              <a
                key={i}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={item.dataCta}
                className="flex flex-col items-center gap-1 text-center flex-1 py-1"
              >
                {content}
              </a>
            );
          }

          return (
            <Link 
              key={i} 
              to={item.path}
              className="flex flex-col items-center gap-1 text-center flex-1 py-1"
            >
              {content}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
