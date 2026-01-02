
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables.
// Always use process.env.API_KEY directly as per SDK guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeViralVideo = async (url: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze this hypothetical video URL for viral potential: ${url}. Provide a JSON response focusing on Hook, Script, and Strategy.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hookScore: { type: Type.NUMBER },
            retentionScore: { type: Type.NUMBER },
            shareability: { type: Type.NUMBER },
            insights: {
              type: Type.OBJECT,
              properties: {
                hook: { type: Type.STRING },
                script: { type: Type.STRING },
                strategy: { type: Type.STRING },
              },
              required: ["hook", "script", "strategy"]
            },
            breakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING },
                  text: { type: Type.STRING },
                  score: { type: Type.NUMBER },
                  suggestion: { type: Type.STRING },
                },
                required: ["time", "text", "score", "suggestion"]
              }
            }
          },
          required: ["hookScore", "retentionScore", "shareability", "insights", "breakdown"]
        }
      }
    });

    // Directly access the .text property of GenerateContentResponse.
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};

export const optimizeContent = async (originalText: string, targetCulture: string, tone: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Optimize the following content for a viral ${targetCulture} audience with a ${tone} tone: "${originalText}". Provide the localized, high-retention script.`,
      config: {
        // Thinking budget is set for gemini-3-pro-preview to enhance reasoning.
        thinkingConfig: { thinkingBudget: 2000 }
      }
    });

    // Directly access the .text property of GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini Optimization Error:", error);
    throw error;
  }
};
