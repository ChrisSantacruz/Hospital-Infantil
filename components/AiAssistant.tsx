'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, AlertCircle } from 'lucide-react';

// Configuración del backend
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export default function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string, error?: boolean }[]>([
        { role: 'ai', text: "Hola. Soy el asistente arquitectónico del proyecto Hospital Infantil. Puedo responder preguntas sobre diseño, materiales, presupuestos y detalles técnicos del proyecto." }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        document.addEventListener('open-ai-assistant', handleOpen);
        return () => document.removeEventListener('open-ai-assistant', handleOpen);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        try {
            // Llamar al backend de Groq AI
            const response = await fetch(`${BACKEND_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMsg }),
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            
            setMessages(prev => [...prev, { 
                role: 'ai', 
                text: data.message || 'No se pudo obtener una respuesta.'
            }]);
        } catch (error) {
            console.error('Error al comunicarse con el backend:', error);
            setMessages(prev => [...prev, { 
                role: 'ai', 
                text: 'Lo siento, hubo un error al conectar con el asistente. Por favor, verifica que el backend esté funcionando.',
                error: true
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-[9990]">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-editorial-dark text-editorial-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-neutral-800 transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                    {!isOpen && <span className="text-xs font-sans uppercase tracking-widest pr-2">Asistente</span>}
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 md:right-8 w-[90vw] md:w-[400px] h-[500px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl z-[9990] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-black/5 flex justify-between items-center bg-white/50">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-editorial-stone" />
                                <span className="font-editorial text-lg text-editorial-dark">Hospital Infantil AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-editorial-stone hover:text-black" /></button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user'
                                            ? 'bg-editorial-dark text-editorial-white rounded-br-none'
                                            : msg.error 
                                                ? 'bg-red-50 border border-red-200 text-red-800 rounded-bl-none shadow-sm flex items-start gap-2'
                                                : 'bg-white border border-stone-200 text-editorial-stone rounded-bl-none shadow-sm'
                                        }`}>
                                        {msg.error && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                                        <span className={msg.error ? 'flex-1' : ''}>{msg.text}</span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-stone-200 p-3 rounded-xl rounded-bl-none shadow-sm flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/50 border-t border-black/5">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Pregunta sobre el proyecto arquitectónico..."
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-sans placeholder:text-stone-400"
                                    autoFocus
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="text-editorial-dark hover:opacity-70 disabled:opacity-30 transition-opacity"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
