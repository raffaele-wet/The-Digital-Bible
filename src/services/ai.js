import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_AI_API_KEY;

// Debug log (solo per sviluppo, non logghiamo la chiave intera per sicurezza)
console.log("Variabile VITE_AI_API_KEY caricata:", API_KEY ? `SÌ (inizia con ${API_KEY.substring(0, 5)}...)` : "NO");

if (!API_KEY) {
  console.warn("VITE_AI_API_KEY non definita nelle variabili d'ambiente. La chat AI non funzionerà.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "dummy-key");

export const getGeminiResponse = async (prompt, systemInstruction = "") => {
  if (!API_KEY) {
    throw new Error("Chiave API mancante. Assicurati che .env.local contenga VITE_AI_API_KEY.");
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction
    });

    console.log("Inviando richiesta a Gemini...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Risposta ricevuta con successo!");
    return text;
  } catch (error) {
    // Log dettagliato dell'errore per il debug
    console.error("Dettaglio Errore Gemini API:", {
      message: error.message,
      stack: error.stack,
      raw: error
    });
    throw error;
  }
};
