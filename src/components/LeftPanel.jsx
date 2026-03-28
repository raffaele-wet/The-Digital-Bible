import React, { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';

const LeftPanel = ({ scene, language = 'it' }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors overflow-hidden relative border border-gray-200 dark:border-gray-700 group">
        {scene && scene.image ? (
          <>
            <img
              src={scene.image}
              alt={scene.sectionTitle?.[language] || scene.sectionTitle?.['it'] || (typeof scene.sectionTitle === 'string' ? scene.sectionTitle : '') || "Scene illustration"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />
            {/* Hover overlay prompting the user to click */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-white text-sm font-medium text-center shadow-sm">
                {language === 'it' ? 'Clicca per espandere' : 'Click to expand'}
              </p>
            </div>
          </>
        ) : (
          // Placeholder when no image is available
          <div className="text-center p-6 space-y-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-full w-full flex flex-col justify-center">
            <div className="inline-flex p-4 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto">
              <ImageIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {language === 'it' ? 'Area Multimediale' : 'Multimedia Area'}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-4">
                {language === 'it' ? 'Nessuna immagine fornita' : 'No image provided'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-[200px] mx-auto">
                {language === 'it'
                  ? "Spazio dedicato ad immagini o animazioni collegate all'episodio in lettura."
                  : "Space dedicated to images or animations related to the current reading."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen lightbox modal */}
      {isLightboxOpen && scene?.image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from bubbling to the backdrop
              setIsLightboxOpen(false);
            }}
            aria-label={language === 'it' ? "Chiudi visualizzazione" : "Close view"}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Enlarged image */}
          <img
            src={scene.image}
            alt={scene.sectionTitle?.[language] || scene.sectionTitle?.['it'] || (typeof scene.sectionTitle === 'string' ? scene.sectionTitle : '') || "Expanded scene illustration"}
            className="max-w-full max-h-full object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Clicking the image should not close the lightbox
          />
        </div>
      )}
    </>
  );
};

export default LeftPanel;
