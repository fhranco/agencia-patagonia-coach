import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: '¡Hola! Soy Patagonian AI. ¿Cómo puedo ayudarte a evolucionar tu negocio hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowGreeting(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/chat.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'bot', content: data.reply }]);
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Lo siento, perdí la conexión con el ecosistema. Por favor, intenta de nuevo.' }]);
    } finally {
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
            className="absolute bottom-0 right-20 w-[320px] sm:w-[380px] h-[500px] max-h-[70vh] bg-patagonia-void/95 backdrop-blur-2xl border border-white/10 rounded-card shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-patagonia-cyan/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-patagonia-cyan/20 flex items-center justify-center border border-patagonia-cyan/30">
                  <Bot className="w-4 h-4 text-patagonia-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Patagonian AI</h4>
                  <p className="text-[10px] text-patagonia-cyan uppercase tracking-widest animate-pulse">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-patagonia-red text-white' 
                      : 'bg-white/5 border border-white/10 text-white/80'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <Loader2 className="w-4 h-4 animate-spin text-patagonia-cyan" />
                  </div>
                </div>
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
    </div>
  );
};

export default AIChat;
