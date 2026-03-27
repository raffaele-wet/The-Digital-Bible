import React, { useState, useRef, useEffect } from 'react';

const InteractiveWord = ({ word, explanation, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // Chiudi il tooltip quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleTooltip = () => {
    setIsOpen(!isOpen);
  };

  return (
    <span 
      className="relative inline-block" 
      ref={popoverRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={toggleTooltip}
        className="font-medium bg-yellow-100/80 dark:bg-yellow-900/30 border-b-2 border-yellow-400/50 text-gray-900 dark:text-gray-100 px-1 cursor-pointer hover:bg-yellow-200/80 dark:hover:bg-yellow-800/40 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 leading-none py-0.5"
      >
        {word}
      </button>

      {/* Pop-up Modale Tooltip */}
      {isOpen && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 animate-in fade-in zoom-in duration-200 pointer-events-none">
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-gray-800"></span>
          
          <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1 border-b border-gray-100 dark:border-gray-700 pb-1">
            {title || word}
          </span>
          <span className="block text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            {explanation}
          </span>
        </span>
      )}
    </span>
  );
};

export default InteractiveWord;
