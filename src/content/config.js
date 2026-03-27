import nativityData from './nativity/index.js';
import preparationData from './preparation/index.js';

export const availableSections = [
  {
    id: 'nativity',
    sectionTitle: { it: 'La Nascita', en: 'The Birth' },
    description: { it: 'I racconti dell\'infanzia di Gesù.', en: 'The infancy narratives of Jesus.' },
    data: nativityData
  },
  {
    id: 'preparation',
    sectionTitle: { it: 'Preparazione al Ministero', en: 'Preparation for Ministry' },
    description: { it: 'Dal battesimo alle tentazioni nel deserto.', en: 'From the baptism to the temptations in the desert.' },
    data: preparationData
  }
];
