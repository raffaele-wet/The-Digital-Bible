import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix per l'icona di default di leaflet in React/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Componente helper per muovere fluidamente la mappa
function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center && center.length === 2 && center[0] && center[1]) {
      map.flyTo(center, 13, { duration: 1.5 });
    }
  }, [center, map]);
  return null;
}

const RightPanel = ({ scene, language = 'it' }) => {
  // Centro di default (es. Gerusalemme) se non c'è coordinata
  const defaultCenter = [31.7774, 35.2354];
  const coordinate = scene?.coordinate || defaultCenter;
  
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-colors z-10 relative isolate">
      
      {/* Intestazione del pannello */}
      <div className="shrink-0 p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 flex justify-between items-center z-20">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {language === 'it' ? 'Mappa Luoghi' : 'Locations Map'}
        </h3>
        {scene?.location && (
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 max-w-[50%] truncate ml-2" title={scene.location?.[language] || scene.location?.['it'] || (typeof scene.location === 'string' ? scene.location : '')}>
            {scene.location?.[language] || scene.location?.['it'] || (typeof scene.location === 'string' ? scene.location : '')}
          </span>
        )}
      </div>

      {/* Contenitore Mappa Interattiva */}
      <div className="flex-grow w-full h-full relative z-0 shadow-inner rounded-b-xl overflow-hidden">
        <MapContainer 
          center={coordinate} 
          zoom={13} 
          scrollWheelZoom={true} 
          className="w-full h-full absolute inset-0 z-0 rounded-b-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <MapUpdater center={coordinate} />
          {scene?.coordinate && (
            <Marker position={coordinate}>
              <Popup className="custom-popup">
                <div className="font-serif text-center min-w-[150px] p-1">
                  <strong className="text-xl font-extrabold text-blue-900 dark:text-gray-800 block mb-1">
                    {scene.location?.[language] || scene.location?.['it'] || (typeof scene.location === 'string' ? scene.location : '') || (language === 'it' ? 'Luogo' : 'Location')}
                  </strong>
                  <span className="text-sm font-medium text-gray-500 block border-t border-gray-100 pt-2 mt-1">
                    {scene.sectionTitle?.[language] || scene.sectionTitle?.['it'] || (typeof scene.sectionTitle === 'string' ? scene.sectionTitle : '')}
                  </span>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      
    </div>
  );
};

export default RightPanel;
