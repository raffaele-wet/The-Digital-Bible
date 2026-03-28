import React from 'react';
import { Moon, Sun, BookOpen, ArrowLeft } from 'lucide-react';

const Header = ({ isDarkMode, toggleTheme, language, onLanguageChange, onGoHome }) => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-300 z-20 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo / title area with back button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onGoHome}
            className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Go to Home"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

          <div className="flex items-center space-x-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">{language === 'it' ? 'La Bibbia' : 'The Bible'}</span>
          </div>
        </div>

        {/* Controls: Theme & Language */}
        <div className="flex items-center space-x-4 w-auto">
          {/* Language switcher */}
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-full p-1 shadow-inner items-center">
            <button
              onClick={() => onLanguageChange('it')}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all ${
                language === 'it'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
              aria-label="Set Italian language"
            >
              IT
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all ${
                language === 'en'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
              aria-label="Set English language"
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
