import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import { NextResponse } from "next/server";
import { Montelo } from "montelo";

const montelo = new Montelo();

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = await req.json();
    console.log("🚀 ~ POST ~ messages:", messages)

    const response = await montelo.openai.chat.completions.create({
      name: "chat",
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer with over 20 years of experience working with job seekers."
        },
        {
          role: "user",
          content: `Highlight the 3 most important responsibilities in this job description: ${messages[0].content}`
        }
      ],
      max_tokens: 100,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Check if the error is an APIError
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      throw error;
    }
  }
}
