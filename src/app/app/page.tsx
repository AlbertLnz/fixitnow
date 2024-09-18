import CodeEditor from '@/components/CodeEditor'
import VerticalCarrouselLanguages from '@/components/VerticalCarrouselLanguages'
import Header from '@/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div id='container' className='w-full flex p-8'>
        <div
          id='slider'
          className='w-[20%] h-auto flex flex-col items-center justify-center'
        >
          <VerticalCarrouselLanguages />
        </div>
        <div className='flex w-full space-x-4 mx-4'>
          <CodeEditor classname='h-full' />
        </div>
      </div>
    </>
  )
}
