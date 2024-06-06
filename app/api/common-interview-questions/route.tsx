import OpenAI from "openai";
import { NextResponse } from "next/server";
import { Montelo } from "montelo";

import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

const montelo = new Montelo();

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = await req.json();

    const result = await generateText({
      model: openai('gpt-3.5-turbo'),
      system: "You are a seasoned hiring manager with over 20 years of experience.",
      messages: [
        {
          role: "user",
          content: `Highlight the 3 most important responsibilities in this job description: 
          ${messages[0].content}. Generate the result in numbering bullet points. Each 
          bullet points should be around 20-30 words.`
        }
      ],
      temperature: 0.8,
    });

    return Response.json(result);
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
