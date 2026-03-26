import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';

const ChatPopup = ({ selectedText, onClose, language = 'it' }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll allo scroll del contenitore dei messaggi
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Messaggio iniziale di analisi basato sul testo selezionato
  useEffect(() => {
    if (selectedText) {
      const greeting = language === 'it' 
        ? `Ho analizzato la parte selezionata: "${selectedText}". Cosa vorresti approfondire? Posso spiegarti il contesto storico, il significato teologico o i termini greci originali.`
        : `I have analyzed the selected part: "${selectedText}". What would you like to explore further? I can explain the historical context, theological meaning, or original Greek terms.`;
        
      setMessages([
        {
          id: 1,
          sender: "ai",
          text: greeting
        }
      ]);
    }
  }, [selectedText, language]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = { id: Date.now(), sender: "user", text: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");
    setIsLoading(true);

    // Simulazione connessione API Chatbot (In futuro connettibile a Gemini o OpenAI)
    setTimeout(() => {
      const simulatedText = language === 'it'
        ? "Questa è una risposta simulata dell'AI. Presto potremo collegare le API reali per scambiare informazioni teologiche avanzate, estrarre il testo parallelo greco originale o darti un'esegesi profonda e interattiva."
        : "This is a simulated AI response. Soon we will be able to connect real APIs to exchange advanced theological information, extract the original Greek parallel text, or provide you with a deep, interactive exegesis.";
      const newAiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: simulatedText
      };
      setMessages(prev => [...prev, newAiMsg]);
      setIsLoading(false);
    }, 1800);
  };

  const truncatedTitle = selectedText?.length > 40 
    ? selectedText.substring(0, 40) + '...' 
    : selectedText;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center sm:items-end sm:justify-end sm:p-6 backdrop-blur-sm bg-black/40 pointer-events-auto transition-all" onClick={onClose}>
      
      {/* Finestra Modale Chat - Glassmorphism Aesthetic */}
      <div 
        className="w-full sm:w-[450px] sm:max-w-[90vw] h-[90vh] sm:h-[600px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-white/40 dark:border-gray-700/60 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header App */}
        <div className="shrink-0 flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 dark:from-blue-900/40 dark:to-indigo-900/40">
          <div className="flex items-center space-x-3 overflow-hidden pr-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full shrink-0 shadow-sm border border-blue-200 dark:border-blue-700">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-tight">
                {language === 'it' ? 'Analisi del testo' : 'Text Analysis'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate font-serif italic mt-0.5">
                "{truncatedTitle}"
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors shrink-0"
            title={language === 'it' ? "Chiudi sessione analitica" : "Close analytical session"}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Conversation Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar bg-transparent">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`p-2 rounded-full shrink-0 h-fit ${msg.sender === 'user' ? 'bg-blue-600 text-white shadow-md' : 'bg-indigo-100 dark:bg-indigo-900/80 border border-indigo-200 dark:border-indigo-800 shadow-sm'}`}>
                  {msg.sender === 'user' 
                    ? <User className="w-4 h-4" /> 
                    : <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
                  }
                </div>
                <div 
                  className={`px-4 py-3 rounded-2xl text-[15px] md:text-base ${
                    msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-sm shadow-md' 
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-sm border border-gray-100 dark:border-gray-700 shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap font-sans">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="flex gap-3 max-w-[85%]">
                <div className="p-2 rounded-full shrink-0 h-fit bg-indigo-100 dark:bg-indigo-900/80 border border-indigo-200 dark:border-indigo-800 shadow-sm">
                  <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-white dark:bg-gray-800 rounded-tl-sm shadow-sm border border-gray-100 dark:border-gray-700 flex space-x-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-500 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-1" />
        </div>

        {/* Text Input Context */}
        <div className="shrink-0 p-4 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
          <form onSubmit={handleSendMessage} className="relative flex items-center">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={language === 'it' ? "Chiedi spiegazioni al teologo virtuale..." : "Ask the virtual theologian for explanations..."} 
              className="w-full pl-5 pr-14 py-3.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 border border-t-white/50 border-gray-300/30 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 placeholder-gray-500 font-sans outline-none transition-all shadow-inner text-[15px]"
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2.5 p-2 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:dark:bg-gray-600 disabled:cursor-not-allowed text-white transition-colors shadow-md"
              aria-label="Invia domanda"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-sans uppercase tracking-widest font-semibold flex items-center justify-center space-x-1">
              <span>AI Chat assistita</span>
              <Sparkles className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatPopup;
