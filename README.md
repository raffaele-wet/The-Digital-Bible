Raffaele Bagnato
raffaele.wet@gmail.com

# The Digital Bible – Interactive Experience

A modern, immersive, and interactive React web application designed to explore sacred texts through satellite maps, detailed illustrations, and advanced AI textual analysis.

## ✨ Features
- **Bilingual Interface (EN/IT):** Native support for the English New Living Translation (NLT) and Italian versions, with English as the primary default.
- **Deep Insights Panel:** Interactive in-text theological and historical references. Clicking on highlighted terms (orange dashed underline) dynamically expands the layout to a side-by-side view with extensive bilingual context.
- **AI Biblical Analyst:** High-end textual analysis using Gemini AI. Select any text segment to receive instant context on historical settings, theological meaning, and original Greek/Aramaic term analysis.
- **Biblical Illustrations:** Each chapter is accompanied by high-quality illustrations to provide visual immersion.
- **Satellite Map Navigation:** Integrated geographical tracking of biblical events using interactive satellite maps.
- **Native Text-to-Speech:** High-quality reading synchronized with the active language.

## 🖼️ Visual Overview

| Main Landing Page | Deep Insight (50/50 View) | AI Analysis Drawer |
| :---: | :---: | :---: |
| ![Home Page](public/screenshots/home_page.png) | ![Deep Insight](public/screenshots/chapter_view.png) | ![AI Analysis](public/screenshots/ai_analysis.png) |

### 🎥 Project Demo
[Watch the interactive session demo](public/screenshots/demo.webp)

## 📖 How to Use

### 1. Exploring Deep Insights
Inside a chapter, look for words with an **orange dashed underline**. 
- **Click the term**: The layout will shift from a 3-column view to a 2-column "Deep Insight" mode.
- **Read details**: The right panel will display a rich theological commentary, including historical references.
- **Return**: Click the "Torna alla lettura" (Back to reading) button to restore the original layout.

### 2. Using the AI Biblical Analyst
For a deeper personalized study of any verse or phrase:
1. **Select the Text**: Use your mouse to highlight any portion of the Bible text.
2. **Click "Analizza brano"**: A small floating action button will appear near your selection.
3. **Review Analysis**: A right-side drawer will open, where the AI Analyst (Gemini) will provide a detailed breakdown of the selected verses, including historical context and linguistic nuances.

## 🛠 Tech Stack
- **React** (UI Components & State Management)
- **Tailwind CSS** (Styling & Dark Mode)
- **Google Gemini API** (Theological AI Analysis)
- **Leaflet** (Interactive Satellite Maps)
- **Vite** (Build Tool)

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/raffaele-wet/Progetto_Bibbia.git
   cd Progetto_Bibbia
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**: 
   Create a `.env.local` file in the root and add your API key:
   ```env
   VITE_AI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🤝 Contributing
Contributions are welcome! This project uses a decoupled plugin architecture, making it easy to add new biblical chapters by updating the `src/content/` directory.

---
> [!NOTE]
> This project is designed for both academic study and personal spiritual exploration.
