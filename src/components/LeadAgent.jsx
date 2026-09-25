import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, MessageSquare, ArrowUpRight, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl, openDigitalDiagnostic } from '../constants/contact';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: 'Hola, soy el asistente de PatagoniaCoach. ¿En qué desafío digital o área de tu empresa te gustaría que te orientemos hoy?'
};

const SUGGESTED_QUERIES = [
  'Necesito una página web',
  'Quiero mejorar mi posicionamiento SEO',
  'Automatizar atención por WhatsApp',
  '¿Por dónde me recomiendan empezar?'
];

const LeadAgent = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          context: {
            page: window.location.pathname,
            source: 'home-ai-assistant'
          }
        })
      });

      const data = await response.json();

      if (response.ok && data.status === 'success' && data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        // Safe graceful fallback
        setHasError(true);
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            isFallback: true,
            content: 'No pudimos conectar el asistente en este momento. Puedes continuar directamente por WhatsApp para recibir atención personalizada.'
          }
        ]);
      }
    } catch (err) {
      console.error('[LeadAgent] Chat fetch error:', err);
      setHasError(true);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          isFallback: true,
          content: 'No pudimos conectar el asistente en este momento. Puedes continuar directamente por WhatsApp para recibir atención personalizada.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bottom-6 right-6 md:right-12 z-[1050] max-w-[calc(100vw-3rem)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[340px] sm:w-[400px] h-[540px] bg-patagonia-black/95 backdrop-blur-3xl border border-white/10 rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.85)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 px-5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-patagonia-gold/30 flex items-center justify-center bg-patagonia-gold/10 text-patagonia-gold">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Asistente PatagoniaCoach</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[9px] text-patagonia-secondary uppercase tracking-[0.15em] font-medium">En línea • Orientación Técnica</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                aria-label="Cerrar asistente"
                className="p-1.5 hover:bg-white/5 rounded-full text-patagonia-secondary hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-white/10 text-left">
              {messages.map((msg, i) => {
                const isAssistant = msg.role === 'assistant';
                return (
                  <div key={i} className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}>
                    <div 
                      className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                        isAssistant 
                          ? 'bg-white/5 border border-white/5 text-patagonia-white font-light rounded-tl-sm' 
                          : 'bg-patagonia-gold text-black font-normal rounded-tr-sm shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>

                      {/* Action buttons if message is fallback or suggests action */}
                      {msg.isFallback && (
                        <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                          <a
                            href={getWhatsAppUrl('Hola PatagoniaCoach, estuve conversando con el asistente web y me gustaría hacer una consulta técnica.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cta="whatsapp"
                            className="w-full py-2.5 px-3 bg-emerald-500 text-black rounded-xl text-[10px] tracking-wider font-bold uppercase hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Continuar por WhatsApp</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-2xl text-xs text-patagonia-secondary flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-patagonia-gold animate-spin" />
                    <span className="text-[10px] tracking-wider uppercase font-medium">Analizando requerimiento...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (Shown initially) */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2">
                <div className="flex items-center gap-1 mb-2 text-[9px] uppercase tracking-wider text-patagonia-secondary font-medium">
                  <Sparkles className="w-3 h-3 text-patagonia-gold" />
                  <span>Consultas sugeridas:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUERIES.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/5 text-patagonia-secondary hover:text-white px-2.5 py-1.5 rounded-lg transition-all text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 border-t border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-1.5 focus-within:border-patagonia-gold/50 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Escribe tu consulta aquí..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  maxLength={500}
                  className="w-full bg-transparent text-xs text-white placeholder:text-patagonia-secondary/50 outline-none py-1.5"
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  data-cta="ai-chat-send"
                  aria-label="Enviar mensaje"
                  className="p-2 bg-patagonia-gold text-black rounded-xl hover:bg-amber-400 disabled:opacity-30 disabled:hover:bg-patagonia-gold transition-all shrink-0 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1 text-[8px] text-patagonia-secondary/60">
                <span>Atención técnica • 53°S Magallanes</span>
                <button
                  onClick={() => {
                    onClose();
                    openDigitalDiagnostic();
                  }}
                  className="text-patagonia-gold hover:underline"
                >
                  Evaluar Presencia Digital
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadAgent;
