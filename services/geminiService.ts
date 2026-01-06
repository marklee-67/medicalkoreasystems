
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = [], lang: 'ko' | 'en' = 'ko') {
    const systemInstruction = lang === 'ko' 
      ? '당신은 Medical Korea Systems (MKS)의 친절한 고객 지원 AI 상담원입니다. 사용자가 Q-health, NutriCheck, HELLIOS와 같은 건강 솔루션을 이해하도록 도와주세요. 전문적이고 따뜻하며 신뢰감 있는 한국어로 답변하세요. 답변은 간결하면서도 핵심 정보를 담아야 합니다.'
      : 'You are a friendly customer support AI agent for Medical Korea Systems (MKS). Help users understand health solutions like Q-health, NutriCheck, and HELLIOS. Respond in professional, warm, and trustworthy English. Keep answers concise but informative.';

    try {
      const response = await this.ai.models.generateContent({
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

      return response.text || (lang === 'ko' ? "죄송합니다. 요청을 처리할 수 없습니다." : "Sorry, I couldn't process your request.");
    } catch (error) {
      console.error("Gemini Error:", error);
      return lang === 'ko' 
        ? "안녕하세요! 현재 시스템 점검 중입니다. 급한 문의는 info@medicalohub.com으로 이메일 주시기 바랍니다."
        : "Hello! Our system is currently under maintenance. For urgent inquiries, please email info@medicalohub.com.";
    }
  }
}

export const gemini = new GeminiService();
