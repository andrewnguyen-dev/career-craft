import Header from '@/components/header'

type HomeProps = {
  children: React.ReactNode
}

export default async function Home({ children }: HomeProps) {
  return (
    <div>
      <Header />
      <p className='text-center mt-8 font-bold'>This is the Landing Page</p>
    </div>
  )
}
