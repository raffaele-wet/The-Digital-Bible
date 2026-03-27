import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { nativityInsights as insightsData } from '../content/nativity/insights';

const InsightPanel = ({ insightId, onClose, language = 'it' }) => {
  const insight = insightsData[insightId];

  if (!insight) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-orange-50/50 dark:bg-gray-800 border-l border-orange-200 dark:border-gray-700 transition-colors">
        <p className="text-gray-500 mb-4">{language === 'it' ? 'Insight non trovato.' : 'Insight not found.'}</p>
        <button 
          onClick={onClose} 
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
        >
          {language === 'it' ? 'Torna Indietro' : 'Go Back'}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-orange-50/30 dark:bg-gray-800/80 border-l border-orange-200 dark:border-gray-700 shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.05)] transition-colors overflow-hidden">
      {/* Header */}
      <div className="shrink-0 px-6 py-4 border-b border-orange-200/50 dark:border-gray-700 flex items-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
        <button 
          onClick={onClose}
          className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'it' ? 'Torna alla lettura' : 'Back to Reading'}</span>
        </button>
      </div>

      {/* Spazio Contenuti Scorrevole */}
      <div className="flex-grow overflow-y-auto px-6 py-8 sm:px-10 custom-scrollbar">
        <div className="max-w-2xl mx-auto flex flex-col space-y-6 animate-in slide-in-from-right-8 fade-in duration-500">
          
          <div className="flex items-center space-x-3 text-orange-600 dark:text-orange-400 mb-2">
            <BookOpen className="w-8 h-8 opacity-80" />
            <span className="text-sm font-bold tracking-widest uppercase">Deep Insight</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 leading-tight">
            {typeof insight.title === 'string' ? insight.title : (insight.title?.[language] || insight.title?.['it'])}
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full my-4"></div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-loose font-serif text-justify whitespace-pre-wrap">
            <p>
              {typeof insight.content === 'string' ? insight.content : (insight.content?.[language] || insight.content?.['it'])}
            </p>
          </div>

          {insight.refs && (
            <div className="mt-8 p-6 bg-orange-100/50 dark:bg-gray-900/50 rounded-2xl border border-orange-200/50 dark:border-gray-700/50">
              <h4 className="text-sm font-bold text-orange-800 dark:text-orange-300 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
                {language === 'it' ? 'Riferimenti Storici' : 'Historical References'}
              </h4>
              <p className="text-md text-gray-700 dark:text-gray-300 italic font-serif">
                {typeof insight.refs === 'string' ? insight.refs : (insight.refs?.[language] || insight.refs?.['it'])}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default InsightPanel;
