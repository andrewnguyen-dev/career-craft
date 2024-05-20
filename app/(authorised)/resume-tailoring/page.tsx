'use client';
 
import { Input } from '@/app/ui/input';
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/resume-tailoring',
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch bg-white">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded"
          value={input}
          placeholder="Input the Job Description here..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}