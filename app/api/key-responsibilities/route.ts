import { generateText } from 'ai'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

import { openai } from '@ai-sdk/openai'
import { auth } from '@clerk/nextjs/server'
import { deductCoin } from '@/lib/coin'

// export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const { userId } = auth()
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { messages } = await req.json()

    const result = await generateText({
      model: openai('gpt-4o'),
      system:
        'You are an expert resume writer with over 20 years of experience working with job seekers.',
      messages: [
        {
          role: 'user',
          content: `Highlight the 3 most important responsibilities in this job description: 
          ${messages[0].content}. Generate the result in numbering bullet points. Each 
          bullet points should be around 20-30 words.`
        }
      ],
      temperature: 0.8
    })

    const response = await deductCoin(userId)
    if (response.error) {
      return Response.json({ error: response.error }, { status: 400 })
    }

    return Response.json(result)
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
