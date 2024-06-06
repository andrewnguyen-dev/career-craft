import { FormEvent, ReactNode } from 'react';
import { Button } from '@/ui/button';
import { Textarea } from '@/ui/textarea';
import LoadingDots from '@/components/loading-dot';
import { Sparkles } from 'lucide-react';

interface FormProps {
  value: string;
  setValue: (value: string) => void;
  isFetching: boolean;
  isDisabled: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  buttonText: string;
}

const Form = ({ value, setValue, isFetching, isDisabled, handleSubmit, placeholder, buttonText }: FormProps) => (
  <form onSubmit={handleSubmit} className='flex h-full flex-col gap-3'>
    <Textarea
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      className='grow'
    />
    <Button
      type='submit'
      disabled={isFetching || isDisabled}
      className='flex-none'
    >
      {isFetching ? (
        <LoadingDots color='white' />
      ) : (
        <>
          <Sparkles className='mr-2 h-4 w-4' />
          {buttonText}
        </>
      )}
    </Button>
  </form>
);

export default Form;
