import { Sparkles } from 'lucide-react'
import React from 'react'

import { Button } from '@/ui/button'
import { Textarea } from '@/ui/textarea'

import LoadingDots from '../loading-dot'

type TextareaFormProps = {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  isDisabled: boolean
  placeholder: string
  buttonText: string
}

const TextareaForm = ({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  isDisabled,
  placeholder,
  buttonText
}: TextareaFormProps) => {
  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Textarea
        value={input}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={isLoading}
      />
      <Button
        type='submit'
        disabled={isLoading || isDisabled}
      >
        {isLoading ? (
          <LoadingDots color='white' />
        ) : (
          <>
            <Sparkles className='mr-2 h-4 w-4' />
            {buttonText}
          </>
        )}
      </Button>
    </form>
  )
}

export default TextareaForm
