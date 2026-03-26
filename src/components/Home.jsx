import React from 'react';
import { Book } from 'lucide-react';
import { availableSections } from '../content/config';

// Single specific call to action structure
const Home = ({ onSelectSection, language = 'it' }) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden font-sans">

      {/* Decorative background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl w-full text-center space-y-16 z-10 animate-fade-in">

        {/* Intro Text */}
        <div className="space-y-8 px-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-200 leading-relaxed italic max-w-4xl mx-auto tracking-wide drop-shadow-md">
            {language === 'it' ? (
              <>
                "Nel principio era la Parola, e la Parola era con Dio, e la Parola era Dio.
                Essa era nel principio con Dio. Ogni cosa è stata fatta per mezzo di lei
                e senza di lei neppure una delle cose fatte è stata fatta. In lei era la vita
                e la vita era la luce degli uomini; la luce splende nelle tenebre
                e le tenebre non l'hanno sopraffatta."
              </>
            ) : (
              <>
                "In the beginning the Word already existed. The Word was with God, and the Word was God. 
                He existed in the beginning with God. God created everything through him, 
                and nothing was created except through him. The Word gave life to everything that was created, 
                and his life brought light to everyone. The light shines in the darkness, 
                and the darkness can never extinguish it."
              </>
            )}
          </p>
          <div className="w-24 h-[1px] bg-slate-500/50 mx-auto mt-8"></div>
          <h1 className="text-sm tracking-[0.3em] uppercase text-slate-400 mt-4 font-semibold">
            {language === 'it' ? 'Vangelo di Giovanni 1:1-5' : 'Gospel of John 1:1-5'}
          </h1>
        </div>

        {/* Call to Action Minimalista - Dinamico dai Plugin Content */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16 w-full px-4 flex-wrap">
          {availableSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className="group relative flex flex-col items-center justify-center p-8 sm:p-12 md:max-w-sm w-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/40 to-black rounded-3xl border border-white/10 group-hover:border-blue-400/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="p-4 bg-white/5 rounded-full border border-white/10 mb-2 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  <Book className="w-10 h-10 text-blue-100 group-hover:text-blue-300 transition-colors" />
                </div>
                <span className="text-sm tracking-[0.2em] font-medium uppercase text-blue-200/70 group-hover:text-blue-200 transition-colors">
                  {language === 'it' ? 'Inizia la Lettura' : 'Begin Reading'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide group-hover:text-blue-50 transition-colors text-center drop-shadow-lg">
                  {section.title?.[language] || section.title?.['it']}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
