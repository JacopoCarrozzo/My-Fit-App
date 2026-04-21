import { useState } from 'react';
import { askAiCoach } from '@/src/services/aiService';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

export const useAiCoach = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      createdAt: new Date(),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      const aiResponse = await askAiCoach(text, null);

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        createdAt: new Date(),
      };

      setMessages([...updatedMessages, botMsg]);
    } catch (error) {
      console.error("Error AI Coach:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return {
    messages,
    sendMessage,
    isTyping,
  };
};