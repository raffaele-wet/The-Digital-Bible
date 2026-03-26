import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationArrows = ({ onNext, onPrev, isFirst, isLast }) => {
  return (
    <>
      {/* Freccia Sinistra (Backward) */}
      {!isFirst && (
        <button 
          onClick={onPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/50 hover:bg-white/90 dark:bg-gray-800/50 dark:hover:bg-gray-800/90 shadow-lg text-gray-700 dark:text-gray-200 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 group"
          aria-label="Precedente"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {/* Freccia Destra (Forward) */}
      {!isLast && (
        <button 
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/50 hover:bg-white/90 dark:bg-gray-800/50 dark:hover:bg-gray-800/90 shadow-lg text-gray-700 dark:text-gray-200 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 group"
          aria-label="Successivo"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default NavigationArrows;
