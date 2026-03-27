import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import CenterReader from './components/CenterReader';
import NavigationArrows from './components/NavigationArrows';
import Home from './components/Home';
import InsightPanel from './components/InsightPanel';
import { availableSections } from './content/config';
import { glossary } from './content/glossary';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  
  // Routing / View State
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'reader'
  const [currentSection, setCurrentSection] = useState(null);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [activeInsight, setActiveInsight] = useState(null);

  const currentSectionData = availableSections.find(s => s.id === currentSection)?.data || [];

  // Gestione tema chiaro/scuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const handleLanguageChange = (lang) => setLanguage(lang);

  const handleSelectSection = (section) => {
    setCurrentSection(section);
    setCurrentSceneIndex(0);
    setCurrentView('reader');
    setActiveInsight(null);
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setActiveInsight(null);
  };

  // Calcolo degli indici per le scene principali
  const getNextMainSceneIndex = () => {
    let nextIdx = currentSceneIndex + 1;
    while (nextIdx < currentSectionData.length && currentSectionData[nextIdx].isSubScene) {
      nextIdx++;
    }
    return nextIdx < currentSectionData.length ? nextIdx : -1;
  };

  const getPrevMainSceneIndex = () => {
    let prevIdx = currentSceneIndex - 1;
    while (prevIdx >= 0 && currentSectionData[prevIdx].isSubScene) {
      prevIdx--;
    }
    return prevIdx >= 0 ? prevIdx : -1;
  };

  const nextSceneIdx = getNextMainSceneIndex();
  const prevSceneIdx = getPrevMainSceneIndex();

  // Se siamo sulla home screen a pieno schermo
  if (currentView === 'home') {
    return (
      <div className={`transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <Home 
          onSelectSection={handleSelectSection} 
          language={language} 
          onLanguageChange={handleLanguageChange}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
      </div>
    );
  }

  // Se siamo nella vista lettore (a 3 colonne)
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Header fisso in alto */}
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        language={language}
        onLanguageChange={handleLanguageChange}
        onGoHome={handleGoHome}
      />

      {/* Main Container + Frecce */}
      <div className="w-full relative flex h-[calc(100vh-80px)] overflow-hidden bg-gray-50 dark:bg-gray-900">
        
        {/* Frecce Laterali (assolute rispetto al main container)*/}
        <NavigationArrows 
          onNext={() => { if (nextSceneIdx !== -1) setCurrentSceneIndex(nextSceneIdx); }}
          onPrev={() => { if (prevSceneIdx !== -1) setCurrentSceneIndex(prevSceneIdx); }}
          isFirst={prevSceneIdx === -1}
          isLast={nextSceneIdx === -1}
        />

        {/* 3 Colonne Principali o Layout Deep Insight */}
        <main className="flex flex-row w-full h-full max-w-7xl mx-auto z-10 pt-4 pb-4 px-2 sm:px-4">
          
          {/* Sinistra (25% o 0%) */}
          <div className={`h-full hidden md:block border-r border-gray-200 dark:border-gray-800 transition-all duration-700 ease-in-out overflow-hidden flex-shrink-0
            ${activeInsight ? 'w-0 opacity-0 px-0 border-transparent border-r-0' : 'w-1/4 opacity-100 pr-4'}
          `}>
            <LeftPanel scene={currentSectionData[currentSceneIndex]} language={language} />
          </div>

          {/* Centro (50%) */}
          <div className={`h-full overflow-hidden flex flex-col min-h-0 px-0 md:px-4 transition-all duration-700 ease-in-out shrink-0
            ${activeInsight ? 'w-full md:w-2/4' : 'w-full md:w-2/4'}
          `}>
            {/* The CenterReader remains exactly 50% width on desktop, but shifted left because LeftPanel shrinks */}
            <CenterReader 
              scene={currentSectionData[currentSceneIndex]} 
              glossary={glossary} 
              language={language}
              onInsightClick={(id) => setActiveInsight(id)}
              onNavigateToScene={(sceneId) => {
                const idx = currentSectionData.findIndex(s => s.id === sceneId);
                if (idx !== -1) setCurrentSceneIndex(idx);
              }}
            />
          </div>

          {/* Destra Layout C: Deep Insight Panel (50% o 0%) */}
          <div className={`h-full overflow-hidden transition-all duration-700 ease-in-out shrink-0
            ${activeInsight ? 'w-full md:w-2/4 opacity-100' : 'w-0 opacity-0'}
          `}>
            {activeInsight && (
              <InsightPanel 
                insightId={activeInsight} 
                onClose={() => setActiveInsight(null)} 
                language={language} 
              />
            )}
          </div>

          {/* Destra Layout A: Mappa Luoghi (25% o 0%) */}
          <div className={`h-full hidden md:block border-l border-gray-200 dark:border-gray-800 transition-all duration-700 ease-in-out overflow-hidden flex-shrink-0
            ${activeInsight ? 'w-0 opacity-0 pl-0 border-transparent border-l-0' : 'w-1/4 opacity-100 pl-4'}
          `}>
            <RightPanel scene={currentSectionData[currentSceneIndex]} language={language} />
          </div>

        </main>
      </div>

    </div>
  );
}

export default App;
