import OpenAI from 'openai'
import { NextResponse } from 'next/server'

import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export const runtime = 'edge'

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = await req.json()

    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      system:
        'You are an expert resume writer with over 20 years of experience working with job seekers.',
      messages: [
        {
          role: 'user',
          content: `I'm writing a bullet point for an experience on my CV but I don't 
          know how my success was measured. I will describe my responsibilities and 
          your task is to list at least 5 relevant metrics that I can include to 
          quantify the impact of my work. Generate the result in numbering bullet points.
          Here's what I did: ${messages[0].content}.`
        }
      ],
      temperature: 0.8
    })

    return result.toAIStreamResponse();
  } catch (error) {
    // Check if the error is an APIError
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error
      return NextResponse.json({ name, status, headers, message }, { status })
    } else {
      throw error
    }
  }
}
