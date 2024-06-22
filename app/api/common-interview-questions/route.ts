import { streamText } from 'ai'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

import { deductCoin } from '@/lib/coin'
import { openai } from '@ai-sdk/openai'
import { auth } from '@clerk/nextjs/server'

type Prompt = {
  prompt: string
}

// export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const { userId } = auth()
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { prompt }: Prompt = await req.json()

    const result = await streamText({
      model: openai('gpt-4o'),
      system:
        'You are a seasoned hiring manager with over 20 years of experience.',
      messages: [
        {
          role: 'user',
          content: `You are responsible for this job posting. Based on this job description, 
          what are the 10 most common interview questions you will ask job applicants? 
          No introduction or conclusion needed, answer only. Here's the job description: 
          ${prompt}.`
        }
      ],
      temperature: 0.8,
      maxTokens: 2000
    })

    const response = await deductCoin(userId)
    if (response.error) {
      return Response.json({ error: response.error }, { status: 400 })
    }

    return result.toAIStreamResponse()
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
