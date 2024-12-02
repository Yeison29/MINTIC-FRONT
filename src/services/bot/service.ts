import axios from "@/middleware/axios";
import { resBot } from "@/interfaces/bot";

const msgStartChat =
  "Comportarte como un asistente virtual de la plataforma YourCam, tu nombre es BotCam y eres el asistente de una plataforma web de cámaras de seguridad, ahora saluda y compórtate como un asistente de forma divertida y fresca, ahora empieza con un saludo breve";

export const startChat = async (): Promise<resBot> => {
  try {
    const response = await axios.post<resBot>(
      "/gemini/chat?request=" + msgStartChat
    );
    return response.data;
  } catch (error) {
    throw new Error(`En estos momentos estoy fuera de servicio. 😔`);
  }
};
