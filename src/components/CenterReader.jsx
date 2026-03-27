import React, { useState } from 'react';
import { Play, Pause, FastForward, Rewind, Sparkles } from 'lucide-react';
import InteractiveWord from './InteractiveWord';
import ChatPopup from './ChatPopup';
import InsightLink from './InsightLink';

const CenterReader = ({ scene, glossary = [], language = 'it', onInsightClick, onNavigateToScene }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [fontSize, setFontSize] = useState(18); // default font size

  // Stati per le scene multi-fonte (Preparation)
  const [activeSource, setActiveSource] = useState('luke');

  // Gestione dinamica setActiveSource al cambio schema
  React.useEffect(() => {
    if (scene?.sources) {
      const keys = Object.keys(scene.sources);
      if (keys.length > 0 && !keys.includes(activeSource)) {
        setActiveSource(keys[0]);
      }
    }
  }, [scene, activeSource]);

  // Stati per AI Text Selection
  const [selectedText, setSelectedText] = useState("");
  const [selectionPos, setSelectionPos] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleMouseUp = () => {
    setTimeout(() => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length > 5 && !isChatOpen) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setSelectionPos({
          top: Math.max(10, rect.top - 45),
          left: rect.left + rect.width / 2
        });
        setSelectedText(text);
      } else {
        setSelectionPos(null);
        setSelectedText("");
      }
    }, 10);
  };

  const handleMouseDown = (e) => {
    if (selectionPos && !e.target.closest('#ai-float-btn')) {
      setSelectionPos(null);
    }
  };

  // Interrompi audio se smonta, o cambia scena o lingua
  React.useEffect(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [scene?.id, language]);

  const toggleAudio = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // safety cancel first
      
      let textToRead = '';
      if (scene?.sources && scene.sources[activeSource]) {
        textToRead = scene.sources[activeSource].verses?.map(v => 
          typeof v.text === 'string' ? v.text : (v.text[language] || v.text['it'])
        ).join(" ");
      } else {
        textToRead = scene?.verses?.map(v => 
          typeof v.text === 'string' ? v.text : (v.text[language] || v.text['it'])
        ).join(" ");
      }
      if (!textToRead) return;

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = language === 'it' ? 'it-IT' : 'en-US';
      utterance.rate = 0.95;
      utterance.pitch = 0.98;

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 32));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 14));

  if (!scene) return null;

  // If this scene is a Menu, render a grid of visual sub-scene links
  if (scene?.type === 'menu') {
    return (
      <div className="max-w-4xl w-full mx-auto flex flex-col h-full bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 p-6 md:p-10 overflow-y-auto custom-scrollbar animate-in fade-in duration-500">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            {scene.sectionTitle?.[language] || scene.sectionTitle?.['it'] || scene.sectionTitle}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-serif max-w-2xl mx-auto italic">
            {scene.description?.[language] || scene.description?.['it']}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scene.subScenes?.map((sub) => (
            <button
              key={sub.id}
              onClick={() => onNavigateToScene && onNavigateToScene(sub.id)}
              className="group relative flex flex-col items-center justify-end overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/5] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <img 
                src={sub.image} 
                alt={sub.title?.[language] || sub.title?.['it']} 
                className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div className="relative z-10 p-6 w-full text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-orange-300 transition-colors drop-shadow-md">
                  {sub.title?.[language] || sub.title?.['it']}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Funzione per renderizzare il testo convertendo le parole del glossario in componenti InteractiveWord
  const renderTextWithGlossary = (text, parentIndex = 0) => {
    if (!text || !glossary || glossary.length === 0) return text;

    const wordMap = new Map();
    glossary.forEach(item => {
      const keywords = item.keywords?.[language] || item.keywords?.['it'] || [];
      keywords.forEach(k => {
        wordMap.set(k.toLowerCase(), {
          term: item.term?.[language] || item.term?.['it'],
          description: item.description?.[language] || item.description?.['it']
        });
      });
    });

    const activeKeys = Array.from(wordMap.keys());
    if (activeKeys.length === 0) return text;

    // Ordina per far matchare le stringhe più lunghe per prime
    activeKeys.sort((a, b) => b.length - a.length);

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = activeKeys.map(escapeRegExp).join('|');
    const regex = new RegExp(`\\b(${pattern})\\b`, 'gi');
    
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const lowerPart = part.toLowerCase();
      if (wordMap.has(lowerPart)) {
        const info = wordMap.get(lowerPart);
        return (
          <InteractiveWord 
            key={`glossary-${parentIndex}-${i}-${lowerPart}`} 
            word={part} 
            title={info.term}
            explanation={info.description} 
          />
        );
      }
      return <React.Fragment key={`text-${parentIndex}-${i}`}>{part}</React.Fragment>; // testo semplice
    });
  };

  // Funzione per renderizzare i link dei Deep Insight [[Parola|id_insight]]
  const renderVerseText = (text) => {
    if (!text) return text;
    // Regex per [[Parola|id_insight]]
    const insightRegex = /\[\[([^|]+)\|([^\]]+)\]\]/g;
    const parts = [];
    let lastIndex = 0;
    
    let match;
    while ((match = insightRegex.exec(text)) !== null) {
      // Il testo prima dell'insight lo passiamo al glossario
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) {
        parts.push(renderTextWithGlossary(beforeText, parts.length));
      }
      
      const displayWord = match[1];
      const insightId = match[2];
      
      parts.push(
        <InsightLink 
          key={`insight-${match.index}`} 
          insightId={insightId} 
          onInsightClick={onInsightClick}
        >
          {displayWord}
        </InsightLink>
      );
      
      lastIndex = insightRegex.lastIndex;
    }
    
    // Il resto del testo
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(renderTextWithGlossary(remainingText, parts.length));
    }
    
    return parts;
  };

  return (
    <div className="max-w-3xl w-full mx-auto flex flex-col bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700/50 transition-colors overflow-hidden h-full min-h-0">
      
      {/* Blocco Superiore (Fisso): Pulsanti Audio e Zoom */}
      <div className="shrink-0 flex-none px-6 pt-6 sm:px-10 sm:pt-8 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8 pb-6">
          
          <button 
            onClick={decreaseFont}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-all font-serif font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            title={language === 'it' ? "Riduci font" : "Decrease Font"}
            aria-label={language === 'it' ? "Riduci dimensione del testo" : "Decrease Text Size"}
          >
            A-
          </button>

          <div className="flex items-center space-x-4">
            <button className="p-3 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 transition-all focus:outline-none">
              <Rewind className="w-6 h-6" />
            </button>
            
            <button 
              onClick={toggleAudio}
              className={`p-5 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30 ring-4 ring-red-500/30 animate-pulse' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'
              }`}
              aria-label={
                isPlaying 
                  ? (language === 'it' ? "Ferma Lettura Vocale" : "Stop Vocal Reading") 
                  : (language === 'it' ? "Avvia Lettura Vocale" : "Start Vocal Reading")
              }
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-0.5" />}
            </button>
            
            <button className="p-3 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-100 transition-all focus:outline-none">
              <FastForward className="w-6 h-6" />
            </button>
          </div>

          <button 
            onClick={increaseFont}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-all font-serif font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            title={language === 'it' ? "Aumenta font" : "Increase Font"}
            aria-label={language === 'it' ? "Aumenta dimensione del testo" : "Increase Text Size"}
          >
            A+
          </button>
        </div>
      </div>

      {/* Blocco Inferiore (Scorrevole): Testo letture */}
      <div className="flex-grow overflow-y-auto min-h-0 h-full w-full custom-scrollbar px-6 pt-8 pb-24 sm:px-10 sm:pt-10 relative">
        
        {/* Generazione Tabs dei Vangeli (solo se la scena ha fonti alternative) */}
        {scene?.sources && Object.keys(scene.sources).length > 1 && (
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {Object.entries(scene.sources).map(([key, source]) => (
              <button
                key={key}
                onClick={() => setActiveSource(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm ${
                  activeSource === key
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                {source.label?.[language] || source.label?.['it']}
              </button>
            ))}
          </div>
        )}

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-2">
            {scene?.sources && activeSource && scene.sources[activeSource]
              ? (scene.sources[activeSource].label?.[language] || scene.sources[activeSource].label?.['it'])
              : (language === 'it' ? 'Vangelo di Luca' : 'Gospel of Luke')}
          </h1>
          <h2 className="text-xl sm:text-2xl font-serif text-gray-600 dark:text-gray-400 mt-2 font-medium italic">
            {scene.sectionTitle?.[language] || scene.sectionTitle?.['it'] || scene.sectionTitle}
          </h2>
          {scene?.sources && activeSource && scene.sources[activeSource] && (
            <div className="text-md sm:text-lg font-serif text-blue-600/80 dark:text-blue-400/80 mt-3 font-semibold">
              {scene.sources[activeSource].ref}
            </div>
          )}
        </div>

        <div 
          className="prose max-w-none text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out"
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
        >
          {/* Animazione di transizione fluida usando chiave dinamica */}
          <div 
            key={scene?.id + (activeSource || '')} 
            className="font-serif leading-loose text-justify relative group animate-in fade-in duration-500"
            style={{ fontSize: `${fontSize}px` }}
          >
            {scene?.verses ? (
              scene.verses.map((verse, index) => {
                const textContent = typeof verse.text === 'string' ? verse.text : (verse.text?.[language] || verse.text?.['it']);
                return (
                  <React.Fragment key={verse.number}>
                    {scene.isChapterStart && index === 0 && (
                      <span className="float-left text-7xl font-serif font-bold text-gray-900 dark:text-gray-100 mr-4 mt-2 mb-2 leading-none selection:bg-transparent">
                        {String(scene.chapter).match(/\d+$/)?.[0] || scene.chapter}
                      </span>
                    )}
                    <span>
                      <sup className="text-gray-400 dark:text-gray-500 font-sans text-xs mr-1 font-semibold select-none">
                        {verse.number}
                      </sup>
                    </span>
                    <span>
                      {renderVerseText(textContent)}{' '}
                    </span>
                  </React.Fragment>
                );
              })
            ) : scene?.sources && activeSource && scene.sources[activeSource] && scene.sources[activeSource].verses ? (
              scene.sources[activeSource].verses.map((verse, index) => {
                const textContent = typeof verse.text === 'string' ? verse.text : (verse.text?.[language] || verse.text?.['it']);
                // Extract only the chapter number digits from the reference (e.g., "Giovanni 2:1-11" -> "2")
                const refHeader = scene.sources[activeSource].ref.split(':')[0];
                const chapterMatch = refHeader.match(/\d+$/);
                const chapterDisplay = chapterMatch ? chapterMatch[0] : refHeader;
                
                return (
                  <React.Fragment key={verse.number}>
                    {verse.isChapterStart && (
                      <span className="float-left text-7xl font-serif font-bold text-gray-900 dark:text-gray-100 mr-4 mt-2 mb-2 leading-none selection:bg-transparent">
                        {chapterDisplay}
                      </span>
                    )}
                    <span>
                      <sup className="text-gray-400 dark:text-gray-500 font-sans text-xs mr-2 font-bold select-none">
                        {verse.number}
                      </sup>
                    </span>
                    <span>
                      {renderVerseText(textContent)}{' '}
                    </span>
                  </React.Fragment>
                );
              })
            ) : null}
          </div>
        </div>
      </div>

      {/* Floating Action Button AI */}
      {selectionPos && selectedText && !isChatOpen && (
        <button
          id="ai-float-btn"
          onClick={() => {
            setIsChatOpen(true);
            setSelectionPos(null);
          }}
          style={{ top: selectionPos.top, left: selectionPos.left, transform: 'translateX(-50%)' }}
          className="fixed z-[90] flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(79,70,229,0.5)] hover:scale-105 hover:shadow-[0_10px_30px_-5px_rgba(79,70,229,0.7)] transition-all animate-in zoom-in-75 duration-200 cursor-pointer"
          title={language === 'it' ? "Analizza questo brano" : "Analyze this passage"}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
            {language === 'it' ? "Analizza brano" : "Analyze Text"}
          </span>
        </button>
      )}

      {/* Modale AI Chat */}
      {isChatOpen && (
        <ChatPopup 
          selectedText={selectedText} 
          onClose={() => setIsChatOpen(false)}
          language={language}
        />
      )}

    </div>
  );
};

export default CenterReader;
