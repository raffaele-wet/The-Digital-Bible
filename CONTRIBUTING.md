# Contributing to The Digital Bible

Thank you for your interest in contributing! This project is an open, interactive Bible reading platform. We welcome contributions in the form of new biblical content, bug fixes, and UI improvements.

---

## Table of Contents

1. [Project Philosophy](#1-project-philosophy)
2. [Project Structure](#2-project-structure)
3. [Adding a New Scene](#3-adding-a-new-scene)
4. [Multi-Gospel Support](#4-multi-gospel-support)
5. [Parent & Sub-Scenes (Menus)](#5-parent--sub-scenes-menus)
6. [Interactive Elements](#6-interactive-elements)
   - [Glossary Terms](#61-glossary-terms)
   - [Deep Insights](#62-deep-insights)
7. [Adding a New Section](#7-adding-a-new-section)
8. [Commit Standards](#8-commit-standards)

---

## 1. Project Philosophy

### 100% English Codebase

All developer-facing content must be written in English:

- Variable names, function names, class names
- Code comments (`//` and `/* */`)
- `console.log`, `console.error`, and thrown `Error` messages
- File names and directory names

```js
// ✅ Correct
const currentSceneIndex = 0;
// Compute the next navigable scene, skipping sub-scenes
const getNextMainSceneIndex = () => { ... };

// ❌ Incorrect
const indiceScenatCorrente = 0;
// Calcola la prossima scena principale
```

### Bilingual Content (IT / EN)

All **user-facing content** — verse text, scene titles, descriptions, glossary entries, and theological insights — must be provided in **both Italian and English**.

Use the `{ it: '...', en: '...' }` object pattern consistently:

```js
sectionTitle: { it: 'La Nascita', en: 'The Birth' },
description: {
  it: 'I racconti dell\'infanzia di Gesù.',
  en: 'The infancy narratives of Jesus.'
},
```

> **Rule of thumb:** If a developer reads it, it's English. If a user reads it, it's bilingual.

---

## 2. Project Structure

```
src/
├── components/          # React UI components
├── content/
│   ├── config.js        # Section registry (availableSections)
│   ├── glossary.js      # All glossary terms
│   ├── nativity/
│   │   ├── index.js     # Scene data array
│   │   └── insights.js  # Theological Deep Insights
│   ├── preparation/
│   │   ├── index.js
│   │   └── insights.js
│   └── galilee/
│       ├── index.js
│       └── insights.js
└── services/
    └── ai.js            # Gemini AI integration
```

Each **section** (e.g., `nativity`, `galilee`) maps to a folder under `src/content/` containing an `index.js` for scene data and an `insights.js` for theological Deep Insights.

---

## 3. Adding a New Scene

A **scene** is a single reading unit — typically one passage or event. Add it to the relevant `index.js` file as an object in the exported array.

### Minimal scene (single source, flat verses)

```js
{
  id: 'scene_unique_id',         // Unique string ID — used for navigation and deep links
  sectionTitle: {
    it: 'Titolo della Scena',
    en: 'Scene Title'
  },
  description: {
    it: 'Breve descrizione del contenuto.',
    en: 'Short description of the content.'
  },
  coordinate: [31.704, 35.203],  // [latitude, longitude] — displayed on the map
  zoom: 14,                       // Default map zoom level (1–18)
  location: { it: 'Betlemme', en: 'Bethlehem' },
  image: imgScena,               // Imported image asset (use ES module import at top of file)
  verses: [
    {
      number: 1,
      isChapterStart: true,      // Set to true on the first verse of a new chapter (renders the drop cap)
      text: {
        it: 'Testo italiano del versetto uno.',
        en: 'English text of verse one.'
      }
    },
    {
      number: 2,
      text: {
        it: 'Testo italiano del versetto due.',
        en: 'English text of verse two.'
      }
    }
  ]
}
```

### Key field reference

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier. Use `snake_case`. |
| `sectionTitle` | `{ it, en }` | ✅ | Displayed as the scene heading. |
| `description` | `{ it, en }` | ✅ | Short summary shown in menus. |
| `coordinate` | `[lat, lng]` | ✅ | Leaflet map center for this scene. |
| `zoom` | `number` | — | Map zoom level (default: 10). |
| `location` | `{ it, en }` | ✅ | Location name shown in the map panel. |
| `image` | imported asset | — | Illustrative image for the left panel. |
| `verses` | `array` | ✅ (or `sources`) | Flat verse array. Use `sources` instead for multi-gospel. |
| `isChapterStart` | `boolean` | — | On the scene (legacy). Prefer `verse.isChapterStart`. |

---

## 4. Multi-Gospel Support

When a passage is narrated by more than one Gospel, use the `sources` object instead of a flat `verses` array. This enables the **source switcher tabs** in the reader.

```js
{
  id: 'the_birth',
  sectionTitle: { it: 'La Nascita', en: 'The Birth' },
  // ... other fields ...
  sources: {
    matthew: {
      label: { it: 'Matteo', en: 'Matthew' },
      ref: '1:18-25',       // Scripture reference shown under the title
      verses: [
        {
          number: 18,
          isChapterStart: true,
          text: {
            it: 'La nascita di Gesù Cristo è avvenuta in questo modo...',
            en: 'This is how Jesus the Messiah was born...'
          }
        }
        // ... more verses
      ]
    },
    luke: {
      label: { it: 'Luca', en: 'Luke' },
      ref: '2:1-7',
      verses: [
        {
          number: 1,
          isChapterStart: true,
          text: {
            it: 'In quei giorni uscì un decreto di Cesare Augusto...',
            en: 'At that time the Roman emperor, Augustus, decreed...'
          }
        }
        // ... more verses
      ]
    }
  }
}
```

### Rules for `sources`

- **Source keys** must be lowercase Gospel names: `matthew`, `mark`, `luke`, `john`.
- Do **not** mix `verses` and `sources` in the same scene object.
- If only one Gospel covers a passage, you may still use `sources` with a single key — but a flat `verses` array is simpler in that case.
- Each verse inside a `sources` entry should include `isChapterStart: true` on the first verse whenever a new chapter begins in that specific Gospel's account.

---

## 5. Parent & Sub-Scenes (Menus)

For groups of related passages (e.g., Parables, Miracles), use a **menu scene** as the parent and link individual passages as **sub-scenes**.

### Step 1 — Define the menu (parent) scene

```js
{
  id: 'parables_menu',
  type: 'menu',                  // Required: signals CenterReader to render a card grid
  sectionTitle: { it: 'Le Parabole', en: 'The Parables' },
  description: {
    it: 'Scegli una parabola da leggere.',
    en: 'Select a parable to read.'
  },
  coordinate: [32.701, 35.298],
  location: { it: 'Galilea', en: 'Galilee' },
  subScenes: [
    {
      id: 'parable_sower',      // Must match the `id` of the sub-scene object below
      title: { it: 'Il Seminatore', en: 'The Sower' },
      image: imgSeminatore
    },
    {
      id: 'parable_mustard',
      title: { it: 'Il Granello di Senape', en: 'The Mustard Seed' },
      image: imgSenape
    }
  ]
}
```

### Step 2 — Define the sub-scenes

Each sub-scene is a **normal scene object** (with `verses` or `sources`) placed anywhere in the same array. Mark it with `isSubScene: true` so the navigation arrows skip it when browsing top-level scenes.

```js
{
  id: 'parable_sower',          // Matches the id in the parent's subScenes array
  isSubScene: true,             // Required: hides this scene from sequential navigation
  sectionTitle: { it: 'La Parabola del Seminatore', en: 'The Parable of the Sower' },
  // ... coordinate, location, image, sources or verses ...
}
```

### Navigation behaviour

- The **navigation arrows** skip sub-scenes when browsing sequentially.
- Clicking a card in the menu grid navigates directly to the sub-scene.
- From a sub-scene, **both arrows** return to the parent menu.

---

## 6. Interactive Elements

### 6.1 Glossary Terms

Glossary terms appear as **yellow dotted underlines** in the text. Hovering reveals a tooltip with the term's definition.

#### Step A — Update `glossary.js`

Add a new entry to the `glossary` array in `src/content/glossary.js`:

```js
{
  // Keywords to match in verse text (case-insensitive)
  keywords: {
    it: ['centurione', 'il centurione'],
    en: ['centurion', 'the centurion']
  },
  term: { it: 'Centurione', en: 'Centurion' },
  description: {
    it: 'Ufficiale dell\'esercito romano che comandava un centurio (circa 80 soldati). Nel I secolo, i centurioni erano responsabili del mantenimento dell\'ordine nelle province.',
    en: 'A Roman army officer commanding a century (approximately 80 soldiers). In the 1st century, centurions were responsible for maintaining order in the provinces.'
  }
}
```

#### Step B — Tag the verse text

In your scene's verse `text` field, wrap the term with a `<span>` tag:

```js
text: {
  it: "Gli si avvicinò un <span className='glossary-item'>centurione</span> che lo supplicava.",
  en: "A <span className='glossary-item'>centurion</span> came and pleaded with him."
}
```

> **Note:** The `CenterReader` component automatically tries to match glossary keywords in plain verse text as well. The explicit `<span>` tag is required only when auto-detection fails (e.g., for multi-word terms or compound phrases).

---

### 6.2 Deep Insights

Deep Insights open a **50/50 split view**: the reader stays on the left and a rich theological panel opens on the right with full markdown support (`**bold**`, `*italic*`, paragraph breaks).

#### Step A — Add the insight to `insights.js`

Each section has its own `insights.js`. Add a new key using a **descriptive string ID** (not a verse reference):

```js
// src/content/galilee/insights.js

export const galileeInsights = {
  // ... existing insights ...

  "sovereignty_of_christ": {
    title: {
      it: "La Sovranità di Cristo",
      en: "The Sovereignty of Christ"
    },
    content: {
      it: `Il comando di Gesù alla tempesta **«Taci! Calmati!»** (Marco 4:39) non è un semplice miracolo meteorologico.
      
È una rivelazione cristologica. Solo YHWH ha autorità sulle acque del caos (Sal 89:9; 107:29). Gesù esercita quella stessa autorità — non come un profeta che intercede, ma come il Signore stesso che ordina alla creazione.`,
      en: `Jesus' command to the storm **"Quiet! Be still!"** (Mark 4:39) is not merely a meteorological miracle.

It is a Christological revelation. Only YHWH holds authority over the waters of chaos (Ps 89:9; 107:29). Jesus exercises that same authority — not as a prophet interceding, but as the Lord himself commanding creation.`
    },
    refs: {
      it: "Sal 89:9 • Sal 107:29 • Mr 4:39 • Gv 1:1-3",
      en: "Ps 89:9 • Ps 107:29 • Mark 4:39 • John 1:1-3"
    }
  }
};
```

#### Step B — Link the insight in the verse text

Use the `<InsightLink>` tag with the matching `insightId`:

```js
text: {
  it: "E <InsightLink insightId='sovereignty_of_christ'>comandò al vento e al mare, e ci fu grande bonaccia</InsightLink>.",
  en: "He <InsightLink insightId='sovereignty_of_christ'>rebuked the wind and the waves, and suddenly there was a great calm</InsightLink>."
}
```

#### Step C — Register the insights file (if creating a new section)

In `InsightPanel.jsx`, import and merge your new insights object:

```js
import { myNewSectionInsights } from '../content/my_section/insights';

const allInsights = {
  ...nativityInsights,
  ...preparationInsights,
  ...galileeInsights,
  ...myNewSectionInsights,  // ← add here
};
```

#### How it renders

| Element | Renders as |
|---|---|
| `**bold text**` | `<strong>` — bold |
| `*italic text*` | `<em>` — italic |
| Double newline (`\n\n`) | New paragraph `<p>` |
| Single newline (`\n`) | `<br />` line break |

---

## 7. Adding a New Section

1. **Create the folder** `src/content/my_section/` and add `index.js` and `insights.js`.

2. **Register the section** in `src/content/config.js`:

```js
import mySectionData from './my_section/index.js';

export const availableSections = [
  // ... existing sections ...
  {
    id: 'my_section',
    sectionTitle: { it: 'Il mio capitolo', en: 'My Chapter' },
    description: {
      it: 'Descrizione breve.',
      en: 'Short description.'
    },
    data: mySectionData
  }
];
```

3. **Register the insights** in `InsightPanel.jsx` (see [Step C above](#step-c--register-the-insights-file-if-creating-a-new-section)).

---

## 8. Commit Standards

We follow a simplified [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <short description>
```

### Types

| Type | Use for |
|---|---|
| `content` | Adding or editing biblical text, scenes, insights, glossary |
| `feat` | New UI feature or component |
| `fix` | Bug fix |
| `refactor` | Code restructuring with no behaviour change |
| `style` | CSS / Tailwind / visual-only changes |
| `docs` | Documentation only (`README`, `CONTRIBUTING`) |
| `chore` | Build config, dependencies, tooling |

### Examples

```bash
# Adding a new biblical passage
git commit -m "content(nativity): add Flight to Egypt scene (Matt 2:13-23)"

# Adding a new glossary term
git commit -m "content(glossary): add Magi and Passover terms"

# Adding a Deep Insight
git commit -m "content(galilee): add sovereignty_of_christ insight to storm scene"

# Fixing a bug
git commit -m "fix(CenterReader): prevent audio from persisting across scene changes"

# Refactoring
git commit -m "refactor(App): translate inline comments to English"
```

### Rules

- Keep the subject line under **72 characters**.
- Use the **imperative mood**: "add", "fix", "remove" — not "added", "fixes", "removing".
- Reference issues or discussions when relevant: `fix(map): marker not shown on mobile (#42)`.
- Do **not** commit directly to `main`. Open a Pull Request.

---

## Questions?

Open a [GitHub Discussion](../../discussions) or file an [Issue](../../issues). We're happy to help!
