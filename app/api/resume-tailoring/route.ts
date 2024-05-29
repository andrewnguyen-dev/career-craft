import OpenAI from "openai";
import { NextResponse } from "next/server";

import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages, keyResponsibilities } = await req.json();

    const result = await generateText({
      model: openai('gpt-3.5-turbo'),
      system: "You are an expert resume writer with over 20 years of experience working with job seekers.",
      messages: [
        {
          role: "user",
          content: `You are apply for a job, which have 3 key responsibilities: ${keyResponsibilities}. 
          Please point out 5 changes need to be done to highlight your most relevant experience for this job. 
          Keep the quantity metrics in the resume if exist. 
          Output should be in HTML table format 
          (no introduction/conclusion sentence needed) with 3 columns: Original version - 
          Improved version - Explanation. Do not make information up. 
          Output format example: <table>\n    <tr>\n        <th>Original version</th>\n        <th>Improved version</th>\n        <th>Reason for the change</th>\n    </tr>\n    <tr>\n        <td>Sample Data</td>\n        <td>Sample data</td>\n        <td>Sample data</td>\n    </tr>\n</table>
          Here is the resume: 
          ${messages[0].content}.`
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
