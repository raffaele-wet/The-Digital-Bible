import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import CenterReader from './components/CenterReader';
import NavigationArrows from './components/NavigationArrows';
import Home from './components/Home';
import { availableSections } from './content/config';
import { glossary } from './content/glossary';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  
  // Routing / View State
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'reader'
  const [currentSection, setCurrentSection] = useState(null);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

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
  };

  const handleGoHome = () => {
    setCurrentView('home');
  };

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
          onNext={() => setCurrentSceneIndex(prev => prev + 1)}
          onPrev={() => setCurrentSceneIndex(prev => prev - 1)}
          isFirst={currentSceneIndex === 0}
          isLast={currentSceneIndex === currentSectionData.length - 1 || currentSectionData.length === 0}
        />

        {/* 3 Colonne Principali */}
        <main className="flex flex-row w-full h-full max-w-7xl mx-auto z-10 pt-4 pb-4 px-2 sm:px-4">
          {/* Sinistra (25%) */}
          <div className="w-1/4 h-full hidden md:block border-r border-gray-200 dark:border-gray-800 pr-4">
            <LeftPanel scene={currentSectionData[currentSceneIndex]} language={language} />
          </div>

          {/* Centro (50%) */}
          <div className="w-full md:w-2/4 h-full overflow-hidden flex flex-col min-h-0 px-0 md:px-4">
            <CenterReader scene={currentSectionData[currentSceneIndex]} glossary={glossary} language={language} />
          </div>

          {/* Destra (25%) */}
          <div className="w-1/4 h-full hidden md:block border-l border-gray-200 dark:border-gray-800 pl-4">
            <RightPanel scene={currentSectionData[currentSceneIndex]} language={language} />
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
