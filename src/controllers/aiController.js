import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "../prompt.js";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: prompt,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function aiController(req, res) {
  const {question} = req.body

  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });
  
  const result = await chatSession.sendMessage(question);

  return res.json({
    response: result.response.text()
  })
}