import React from 'react';
import { Book, Moon, Sun } from 'lucide-react';
import { availableSections } from '../content/config';

const Home = ({ onSelectSection, language = 'it', onLanguageChange, isDarkMode, toggleTheme }) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-y-auto font-sans">

      {/* Language and Theme Switcher (Top Right) */}
      <div className="absolute top-6 right-6 z-50 flex items-center space-x-4">
        <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
          <button
            onClick={() => onLanguageChange('it')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              language === 'it' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-gray-300 hover:text-white'
            }`}
          >
            IT
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              language === 'en' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-gray-300 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md text-gray-300 hover:text-white border border-white/10 transition-all hover:bg-white/20"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Decorative background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl w-full text-center flex flex-col items-center space-y-12 md:space-y-20 z-10 animate-fade-in py-12">

        {/* Intro Text / Quote Section - Final Clean Layout */}
        <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center z-10">
          <p className="text-gray-100 text-lg md:text-2xl font-serif italic text-center leading-relaxed">
            {language === 'it' 
              ? "Nel principio era la Parola, e la Parola era con Dio, e la Parola era Dio. Essa era nel principio con Dio. Ogni cosa è stata fatta per mezzo di lei e senza di lei neppure una delle cose fatte è stata fatta. In lei era la vita e la vita era la luce degli uomini; la luce splende nelle tenebre e le tenebre non l'hanno sopraffatta."
              : "In the beginning the Word already existed. The Word was with God, and the Word was God. He existed in the beginning with God. God created everything through him, and nothing was created except through him. The Word gave life to everything that was created, and his life brought light to everyone. The light shines in the darkness, and the darkness can never extinguish it."
            }
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-gray-400 font-sans">
            {language === 'it' ? 'Vangelo di Giovanni 1:1-5' : 'Gospel of John 1:1-5'}
          </p>
        </div>

        {/* Sections Listing - Improved Card Design with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full px-4 max-w-4xl mx-auto place-items-center">
          {availableSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className="group relative flex flex-col items-center justify-center p-8 sm:p-10 w-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-2xl"
            >
              {/* Premium Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-blue-400/40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-2 group-hover:bg-blue-600/20 group-hover:border-blue-400/50 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  <Book className="w-10 h-10 text-blue-100 group-hover:text-blue-300 transition-colors" />
                </div>
                
                <div className="flex flex-col space-y-3 items-center">
                  <span className="text-xs tracking-[0.3em] font-bold uppercase text-blue-400 group-hover:text-blue-300 transition-colors">
                    {language === 'it' ? 'Inizia la Lettura' : 'Begin Reading'}
                  </span>
                  <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-wide group-hover:text-blue-50 transition-colors text-center drop-shadow-lg leading-tight">
                    {section.sectionTitle?.[language] || section.sectionTitle?.['it']}
                  </h2>
                  {section.description && (
                    <p className="text-sm font-sans text-gray-400 max-w-[250px] mt-3 group-hover:text-gray-300 transition-colors text-center">
                      {section.description[language] || section.description['it']}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
