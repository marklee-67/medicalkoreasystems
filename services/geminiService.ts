
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  /**
   * Medical Korea Systems AI Support Agent
   * Implementation using @google/genai SDK best practices
   */
  async chat(message: string, history: any[] = [], lang: string = 'ko') {
    // API_KEY is provided via process.env during build and runtime
    const apiKey = process.env.API_KEY || '';
    
    // Initializing with named parameter as required by the latest SDK
    const ai = new GoogleGenAI({ apiKey });
    
    let systemInstruction = '';
    
    switch(lang) {
      case 'ko':
        systemInstruction = '당신은 Medical Korea Systems (MKS)의 전문적인 AI 상담원입니다. 사용자가 Q-health, NutriCheck, HELIOS™와 같은 고급 의료 솔루션을 이해하도록 도와주세요. 친절하고 신뢰감 있는 톤을 유지하세요.';
        break;
      case 'lo':
        systemInstruction = 'ທ່ານແມ່ນ AI ຊ່ວຍເຫຼືອລູກຄ້າຂອງ Medical Korea Systems (MKS). ກະລຸນາຕອບເປັນພາສາລາວຢ່າງສຸພາບ ແລະ ເປັນມືອາຊີບ.';
        break;
      case 'si':
        systemInstruction = 'ඔබ Medical Korea Systems (MKS) හි පාරිභෝගික සහාය AI සහායකයා වේ. කරුණාකර අපගේ සෞඛ්‍ය විසඳුම් පිළිබඳව සිංහල භාෂාවෙන් පිළිතුරු දෙන්න.';
        break;
      default:
        systemInstruction = 'You are a professional AI agent for Medical Korea Systems (MKS). Help users navigate our health solutions like Q-health and NutriCheck with a warm, expert tone.';
    }

    try {
      // Corrected API usage: calling generateContent directly on ai.models
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...history,
            { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // Corrected extraction: .text is a property, not a method
      const outputText = response.text;
      return outputText || "I'm sorry, I couldn't generate a response at this moment.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "The AI service is currently initializing. Please try again in a few seconds.";
    }
  }
}

export const gemini = new GeminiService();
