
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  /**
   * Sends a message to the Gemini AI and returns the response text.
   * Following SDK rules:
   * - Initialize GoogleGenAI within the call to ensure fresh API key usage.
   * - Access the .text property of the response directly.
   */
  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = [], lang: string = 'ko') {
    // Always use the named parameter for API key initialization
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    let systemInstruction = '';
    
    switch(lang) {
      case 'ko':
        systemInstruction = '당신은 Medical Korea Systems (MKS)의 친절한 고객 지원 AI 상담원입니다. 사용자가 Q-health, NutriCheck, HELIOS™와 같은 건강 솔루션을 이해하도록 도와주세요. 전문적이고 따뜻하며 신뢰감 있는 한국어로 답변하세요.';
        break;
      case 'lo':
        systemInstruction = 'ທ່ານແມ່ນ AI ຊ່ວຍເຫຼືອລູກຄ້າຂອງ Medical Korea Systems (MKS). ກະລຸນາຕອບເປັນພາສາລາວຢ່າງສຸພາບ ແລະ ເປັນມືອາຊີບ ກ່ຽວກັບບໍລິການທາງການແພດຂອງພວກເຮົາ.';
        break;
      case 'si':
        systemInstruction = 'ඔබ Medical Korea Systems (MKS) හි පාරිභෝගික සහාය AI සහායකයා වේ. කරුණාකර අපගේ සෞඛ්‍ය විසඳුම් පිළිබඳව සිංහල භාෂාවෙන් ඉතා සුහදශීලීව සහ වෘත්තීයමය ලෙස පිළිතුරු දෙන්න.';
        break;
      default:
        systemInstruction = 'You are a friendly customer support AI agent for Medical Korea Systems (MKS). Help users understand health solutions like Q-health, NutriCheck, and HELIOS™. Respond in professional, warm, and trustworthy English.';
    }

    try {
      // Use ai.models.generateContent with the model name and prompt/history
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

      // Directly access .text property as per SDK guidelines (not a method)
      return response.text || "Sorry, I couldn't process your request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Hello! Our system is currently under maintenance. Please try again later.";
    }
  }
}

export const gemini = new GeminiService();
