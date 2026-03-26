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
    <span className="relative inline-block" ref={popoverRef}>
      <button
        onClick={toggleTooltip}
        className="font-medium bg-bibbiaHighlight-light dark:bg-bibbiaHighlight-dark/40 text-gray-900 dark:text-gray-100 rounded px-1 cursor-pointer hover:opacity-80 transition-opacity decoration-dashed underline underline-offset-4 decoration-yellow-600 dark:decoration-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {word}
      </button>

      {/* Pop-up Modale Tooltip */}
      {isOpen && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 animate-in fade-in zoom-in duration-200">
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
