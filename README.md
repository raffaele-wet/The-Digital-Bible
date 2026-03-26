# The Interactive Bible - Nativity Edition

A modern, bilingual, and interactive React web application designed to explore sacred texts through immersive satellite maps, AI-generated images, and contextual theological analysis.

## ✨ Features
- **Bilingual Interface (IT/EN):** Instant hot-swapping between the Italian translation and the English New Living Translation (NLT).
- **AI Biblical Analyst:** Select any portion of text to receive a deep theological and historical analysis, including insights into original Greek and Aramaic terms.
- **Biblical Illustrations:** Verses are accompanied by curated illustrations (located in `src/assets/images/`) to provide visual context.
- **Satellite Map Navigation:** An integrated satellite map automatically tracks geographical locations of biblical events.
- **Interactive Glossary:** Hover over highlighted keywords to discover contextual theological descriptions.
- **Native Text-to-Speech:** High-quality reading synchronized with the active language.

## 🖼️ Visual Overview

| Home Page | Chapter View | AI Analysis |
| :---: | :---: | :---: |
| ![Home Page](public/screenshots/home_page.png) | ![Chapter View](public/screenshots/chapter_view.png) | ![AI Analysis](public/screenshots/ai_analysis.png) |

### 🎥 Project Demo
[Guarda la demo interattiva](public/screenshots/demo.webp)

> [!TIP]
> **Progetto in continua evoluzione**: L'architettura a plugin permette di aggiungere facilmente nuovi libri e capitoli della Bibbia semplicemente aggiornando la cartella `src/content/`.

## 🛠 Tech Stack
- **React** (UI Components & State Management)
- **Tailwind CSS** (Styling, Layouts & Dark Mode)
- **Leaflet (Maps)** (Geographical Data Integration)
- **Vite** (Build Tool & Fast Dev Server)

## 🚀 Installation & Setup

1. **Clone the repository** and navigate into the project folder:
   ```bash
   git clone https://github.com/your-username/interactive-bible.git
   cd interactive-bible
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` to explore the application.

## 🤝 Contributing
Contributions are highly welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file for detailed instructions on how to easily add new biblical chapters leveraging the app's decoupled plugin architecture.
