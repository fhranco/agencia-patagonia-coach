import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Loader2, X } from 'lucide-react';

const LeadAgent = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bienvenido a PatagoniaCoach. ¿En qué dimensión de su negocio desea aplicar nuestra visión táctica hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'chat',
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, mi conexión ha tenido un breve retardo. ¿Podría repetir su consulta?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bottom-28 right-28 z-[510]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[320px] md:w-[400px] h-[550px] bg-patagonia-black/95 backdrop-blur-3xl border border-white/10 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-patagonia-red/20 to-transparent border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-patagonia-gold/30 flex items-center justify-center bg-white/5">
                  <Bot className="w-5 h-5 text-patagonia-gold" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Mastery Concierge</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] text-patagonia-secondary uppercase tracking-[0.2em] font-bold">DeepSeek 2026</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full text-patagonia-secondary hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-light leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-patagonia-red text-white rounded-tr-none shadow-lg' 
                    : 'bg-white/5 border border-white/10 text-patagonia-white rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-full border border-white/5">
                    <Loader2 className="w-4 h-4 text-patagonia-gold animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <div className="p-6 border-t border-white/5 bg-black/40">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-1.5 pl-4 rounded-full focus-within:border-patagonia-gold/50 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escriba aquí..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-[10px] font-light"
                />
                <button 
                  onClick={handleSend}
                  className="w-8 h-8 bg-patagonia-red rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-lg"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-center mt-4 text-[7px] uppercase tracking-[0.4em] text-patagonia-secondary font-black opacity-50">
                Franco Gallardo | <span className="text-patagonia-gold">PatagoniaCoach</span>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadAgent;
