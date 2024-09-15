import express from "express";
import cors from "cors";
import { Gemini } from 'gemini-api';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;

const gemini = new Gemini(apiKey); // Initialize the Gemini instance with the API key

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Define '/chatbot' route to handle questions
app.post('/chatbot', async (req, res) => {
  // The 'question' variable is the user's input from the frontend
  const { question } = req.body;

  // Here is where we communicate with the Gemini API to create our chatbot.
  // We store the chatbot's response in the 'response' variable
  const response = await gemini.createCompletion({
    messages: [
      // We give the chatbot a role with some content to determine how it will behave
      // On content we can set our bot personality.
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      // We ask the chatbot to generate an answer based on the user's question
      // Remember, this question will come from the frontend
      {
        role: 'user',
        content: question,
      },
    ],
    // We choose the model we want to use for our chatbot
    model: 'gemini-1.5',
    // We add a value for max_tokens to ensure the response won't exceed 300 tokens
    // This is to make sure the responses aren't too long
    max_tokens: 300,
  });

  // Then we take the text response and display it on the server
  // Note: This will only work once we set up our frontend logic
  res.send(response.choices[0].message.content);
});