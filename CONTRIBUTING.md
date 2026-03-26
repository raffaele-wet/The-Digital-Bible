# Contributing to The Interactive Bible

Welcome! We are thrilled that you want to contribute to expanding this application. The project has been built following a **strictly Data-Driven and Modular (Plugin-based)** approach.

This means you can easily add new topics, events, or entire chapters of the Bible *without ever touching the React code or the CSS* of the user interface. The UI components will dynamically adapt.

## How to add new chapters

Follow these simple steps:

### 1. Create a Content Directory
Navigate to `src/content/` and create a new folder named after your biblical event or chapter (e.g., `src/content/last-supper/`).

### 2. Define the `index.js` Structure
Inside your new folder, create an `index.js` file that will export an array of scenes/events written in our standardized, bilingual JSON format.

Here is a template based on the `nativity/index.js` structure:

```javascript
/* src/content/last-supper/index.js */

export default [
  {
    id: 1, // Incremental ID
    chapter: 22,
    isChapterStart: true, // Display a giant chapter number
    sectionTitle: { 
      it: "La Preparazione della Pasqua", 
      en: "Preparation of the Passover" 
    },
    verses: [
      { 
        number: 14, 
        text: { 
          it: "Quando giunse l'ora, egli si mise a tavola...", 
          en: "When the time came, Jesus and the apostles sat down together at the table..." 
        } 
      }
      // ... Add more verses here
    ],
    location: { 
      it: "Gerusalemme - Il Cenacolo", 
      en: "Jerusalem - The Upper Room" 
    },
    coordinate: [31.7715, 35.2287], // The Leaflet Map will jump here
    // image: import("path/to/image.png"), // Optional artwork to display on the Left Panel
  }
];
```

**Key Definitions:**
- `chapter`: The numeric chapter of the gospel.
- `isChapterStart`: Set to `true` if this is the start of a new chapter; it will render a giant chapter numeral in the Reader.
- `sectionTitle`: A concise title for the biblical event.
- `verses`: An array of objects containing the `number` and bilingual `text`.
- `location`, `coordinate`, `image`: These properties feed the geographical map and interactive multimedia panels automatically.

### 3. Register the Module
The final step is to inform the main router that a new chapter block exists. Open `src/content/config.js` and add your imported file to the `availableSections` array.

```javascript
import nativityData from './nativity/index.js';
import lastSupperData from './last-supper/index.js'; // 1. Import it

export const availableSections = [
  {
    id: 'nativity',
    title: { it: 'La Nascita', en: 'The Birth' },
    data: nativityData
  },
  {
    id: 'last-supper',
    title: { it: "Ultima Cena", en: 'The Last Supper' },
    data: lastSupperData // 2. Register it
  }
];
```

**You're done!** The App will automatically detect your new plugin. It will generate a sleek new "Card" on the Main Menu using the `title` you provided in the `config.js`, and the React Reader will effortlessly scroll and read through your verses!
