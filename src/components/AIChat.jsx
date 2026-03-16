import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Plus } from 'lucide-react';

const AIChat = ({ hideButton = false, forceOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [step, setStep] = useState(() => {
    return localStorage.getItem('patagonia_chat_lead_captured') === 'true' ? 'chat' : 'nombre';
  });
  const [userData, setUserData] = useState({ nombre: '', whatsapp: '' });
  
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('patagonia_chat_history');
    if (saved) return JSON.parse(saved);
    
    const isCaptured = localStorage.getItem('patagonia_chat_lead_captured') === 'true';
    return isCaptured 
      ? [{ role: 'bot', content: '¿Qué escalamos hoy?' }]
      : [{ role: 'bot', content: 'Para iniciar la consultoría, ¿cuál es tu nombre?' }];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  
  useEffect(() => {
    localStorage.setItem('patagonia_chat_history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (forceOpen) setIsOpen(true);
  }, [forceOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasInteracted = localStorage.getItem('patagonia_chat_interacted');
      if (!isOpen && !hasInteracted) {
        setShowGreeting(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const clearHistory = () => {
    const isCaptured = localStorage.getItem('patagonia_chat_lead_captured') === 'true';
    const initialMsg = isCaptured 
      ? [{ role: 'bot', content: '¿Qué escalamos hoy?' }]
      : [{ role: 'bot', content: 'Para iniciar la consultoría, ¿cuál es tu nombre?' }];
    
    setMessages(initialMsg);
    setStep(isCaptured ? 'chat' : 'nombre');
    localStorage.removeItem('patagonia_chat_history');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const saveLead = async (data) => {
    try {
      await fetch('/save_lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      localStorage.setItem('patagonia_chat_lead_captured', 'true');
    } catch (e) {
      console.error("Error saving lead", e);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    localStorage.setItem('patagonia_chat_interacted', 'true');

    // FLUJO DE CAPTURA
    if (step === 'nombre') {
      setUserData(prev => ({ ...prev, nombre: userMsg }));
      setIsLoading(true);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: `Hola ${userMsg.split(' ')[0]}. ¿Tu WhatsApp? (Para agendar luego).` }]);
        setStep('whatsapp');
        setIsLoading(false);
      }, 1000);
      return;
    }

    if (step === 'whatsapp') {
      const updatedData = { ...userData, whatsapp: userMsg };
      setUserData(updatedData);
      setIsLoading(true);
      await saveLead(updatedData); // Guardamos lead
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: 'Perfecto. Sesión estratégica activada. ¿En qué trabajamos?' }]);
        setStep('chat');
        setIsLoading(false);
      }, 1000);
      return;
    }

    // CHAT NORMAL CON IA
    setIsLoading(true);
    try {
      const response = await fetch('/chat.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });

      const data = await response.json();
      
      if (data.reply) {
        const typingTime = Math.min(Math.max(data.reply.length * 15, 800), 2500);
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'bot', content: data.reply }]);
          setIsLoading(false);
        }, typingTime);
      } else {
        throw new Error();
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Perdí la señal. Intenta de nuevo.' }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="absolute bottom-0 right-20 w-[320px] sm:w-[380px] h-[500px] max-h-[85vh] bg-patagonia-void/90 backdrop-blur-3xl border border-white/5 rounded-card shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-patagonia-cyan animate-pulse shadow-[0_0_10px_#00F0FF]" />
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">Arquitecto Digital</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 1 && (
                  <button 
                    onClick={clearHistory}
                    title="Reiniciar chat"
                    className="p-1.5 hover:bg-white/5 rounded-full transition-colors text-white/20 hover:text-patagonia-red"
                  >
                    <Plus className="w-4 h-4 rotate-45" />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/5 rounded-full transition-colors text-white/30 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] text-[13px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-patagonia-red text-white px-4 py-2.5 rounded-2xl rounded-tr-none shadow-lg' 
                      : 'text-white/80 font-light'
                  } ${msg.role === 'bot' && 'border-l border-patagonia-cyan/30 pl-4 py-1'}`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="flex justify-start pl-4"
                >
                  <div className="flex gap-1.5">
                    <span className="w-1 h-1 bg-patagonia-cyan rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1 h-1 bg-patagonia-cyan rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1 h-1 bg-patagonia-cyan rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:border-patagonia-cyan outline-none transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-full bg-patagonia-cyan text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Proactive Greeting Bubble */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-64 bg-white text-patagonia-void p-4 rounded-2xl shadow-2xl border border-white/20 select-none cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowGreeting(false);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-patagonia-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-patagonia-red/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-patagonia-red" />
              </div>
              <p className="text-xs font-medium leading-relaxed">
                <span className="font-bold">¿Hablamos?</span> Puedo ayudarte a integrar IA y potenciar tu marketing hoy mismo.
              </p>
            </div>
            {/* Triangle Tail */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!hideButton && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowGreeting(false);
          }}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all group ${
            isOpen ? 'bg-white text-black rotate-90' : 'bg-patagonia-red shadow-[0_0_40px_rgba(240,20,10,0.4)]'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Bot className="w-7 h-7 text-white" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-patagonia-cyan rounded-full border-2 border-black" 
              />
            </div>
          )}

          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-full mr-4 bg-patagonia-void border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-heading tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              IA CHAT
            </div>
          )}
        </motion.button>
      )}
    </div>
  );
};

export default AIChat;
