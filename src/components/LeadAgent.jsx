import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2, Award, ChevronRight } from 'lucide-react';

const LeadAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Bienvenido a PatagoniaCoach. Soy el Concierge de Maestría de Franco Gallardo. ¿En qué dimensión de su negocio desea aplicar nuestra visión táctica hoy?' }
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

      // Simple Lead Detection Logic (Front-end side preview)
      if (aiResponse.toLowerCase().includes('email') || aiResponse.toLowerCase().includes('contacto')) {
         // Auto-trigger lead if AI asks for it (Wait for user to provide it in next step)
      }

    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, mi conexión con la maestría magallánica ha tenido un breve retardo. ¿Podría repetir su consulta?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[500]">
      {/* Floating Bubble */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all border ${
          isOpen ? 'bg-white/10 border-white/20' : 'bg-patagonia-red border-patagonia-gold/30 hover:shadow-[0_0_30px_rgba(255,23,33,0.5)]'
        }`}
      >
        {isOpen ? <X className="w-8 h-8 text-white" /> : <MessageSquare className="w-8 h-8 text-white" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-patagonia-black/95 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 bg-gradient-to-r from-patagonia-red/20 to-transparent border-b border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-patagonia-gold/30 flex items-center justify-center bg-white/5">
                <Bot className="w-6 h-6 text-patagonia-gold" />
              </div>
              <div>
                <h4 className="text-[12px] font-black text-white uppercase tracking-[0.3em]">Mastery Concierge</h4>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] text-patagonia-secondary uppercase tracking-[0.2em] font-bold">DeepSeek Enabled 2026</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-3xl text-sm font-light leading-relaxed ${
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
                  <div className="bg-white/5 p-4 rounded-full border border-white/5">
                    <Loader2 className="w-5 h-5 text-patagonia-gold animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <div className="p-8 border-t border-white/5 bg-black/40">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 pl-6 rounded-full focus-within:border-patagonia-gold/50 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hablemos de maestría..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-xs font-light"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 bg-patagonia-red rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-lg overflow-hidden relative"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-center mt-6 text-[8px] uppercase tracking-[0.4em] text-patagonia-secondary font-black opacity-50">
                Liderado por <span className="text-patagonia-gold">Franco Gallardo</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadAgent;
