import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  step: number;
  title: string;
}

const Card = ({ children, step, title }: CardProps) => (
  <section className='bg-white dark:bg-neutral-800/60 flex flex-1 flex-col rounded-2xl p-5 gap-4'>
    <div>
      <span className='bg-apple-300 dark:bg-apple-700 text-apple-950 dark:text-apple-100 inline-block self-start rounded-sm px-1.5 py-[0.2rem] text-xs font-semibold uppercase'>
        Step {step}
      </span>
      <p className='text-gray-800 dark:text-gray-300 mt-2 font-medium'>{title}</p>
    </div>
    {children}
  </section>
);

export default Card;
