import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-brutal border-2 transition-all duration-500 ${scrolled
                    ? 'bg-surface-white/90 backdrop-blur-xl border-text-black shadow-[4px_4px_0px_#111111]'
                    : 'bg-surface-white border-text-black'
                }`}
            style={{ width: 'min(90vw, 720px)' }}
        >
            {/* Left: Brand */}
            <div className="font-mono text-xs font-bold tracking-wider text-text-black">
                <span className="text-accent-red">[</span>
                APC // CONTROL_ROOM
                <span className="text-accent-red">]</span>
            </div>

            {/* Right: CTA */}
            <button
                data-cursor-hover
                className="btn-brutal btn-brutal-red text-[10px] tracking-widest whitespace-nowrap"
            >
                ACCESS DASHBOARD
            </button>
        </motion.nav>
    );
}
