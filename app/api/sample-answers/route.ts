import OpenAI from "openai";
import { NextResponse } from "next/server";

import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  try {
    const {prompt, interviewQuestions}: {prompt: string, interviewQuestions: string} = await req.json()

    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      system: "You are a seasoned hiring manager with over 20 years of experience.",
      messages: [
        {
          role: "user",
          content: `Based on my own resume, write me answer to the interview questions:
          ${interviewQuestions}. Use the CARL answer format: 
          Context (project background), Action (what I did), Results (include 
          quantifiable metrics), and Learning (what I learned from the project).
          No introduction or conclusion needed, answer only. Here's my resume: 
          ${prompt}`
        }
      ],
      temperature: 0.8,
      maxTokens: 2000,
    });

    return result.toAIStreamResponse();
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
