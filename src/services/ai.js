import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_AI_API_KEY;

// Debug log — only for development. We do not log the full key for security reasons.
console.log("VITE_AI_API_KEY loaded:", API_KEY ? `YES (starts with ${API_KEY.substring(0, 5)}...)` : "NO");

if (!API_KEY) {
  console.warn("VITE_AI_API_KEY is not defined in environment variables. The AI chat will not function.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "dummy-key");

export const getGeminiResponse = async (prompt, systemInstruction = "") => {
  if (!API_KEY) {
    throw new Error("Missing API key. Make sure .env.local contains VITE_AI_API_KEY.");
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction
    });

    console.log("Sending request to Gemini...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Response received successfully.");
    return text;
  } catch (error) {
    // Detailed error log for debugging
    console.error("Gemini API error details:", {
      message: error.message,
      stack: error.stack,
      raw: error
    });
    throw error;
  }
};
