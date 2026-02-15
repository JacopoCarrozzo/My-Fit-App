import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserProfile } from '@/src/types/user';

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

export const askAiCoach = async (userMessage: string, profile: UserProfile | null): Promise<string> => {
  if (!API_KEY) return "Error: API Key missing.";

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const systemContext = `
      You are an experienced and motivating AI Fitness Coach.
      User Data: ${profile?.name || 'User'}, Weight: ${profile?.weight || '--'}kg, Goal: ${profile?.goal || 'Wellbeing'}.
      Respond in English, be concise, and give practical advice.
    `;

    const prompt = `${systemContext}\n\nDomanda: ${userMessage}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text.trim();

  } catch (error: any) {
    console.error("❌ Error while chatting:", error);
    return "The Coach encountered a technical issue. Please try again soon!";
  }
};