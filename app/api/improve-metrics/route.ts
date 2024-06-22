import { streamText } from 'ai'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

import { deductCoin } from '@/lib/coin'
import { openai } from '@ai-sdk/openai'
import { auth } from '@clerk/nextjs/server'

type Prompt = {
  prompt: string
}

// export const runtime = 'edge'

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
        'You are an expert resume writer with over 20 years of experience working with job seekers.',
      messages: [
        {
          role: 'user',
          content: `I'm writing a bullet point for an experience on my CV. I want it to be more impactful.
          Improve it by using the X-Y-Z resume bullet point formula: Accomplished X, as measured by Y, 
          by doing Z. For example: 'Grew revenue for 15 small and medium business clients by 10% QoQ by 
          mapping new software features as solutions to their business goals.'
          Here's what I have: ${prompt}. Don't need to include introduction or conclusion, improved bullet point only.`
        }
      ],
      temperature: 0.8
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
