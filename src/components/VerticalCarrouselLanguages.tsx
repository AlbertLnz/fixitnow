'use client'

import { useEffect, useState } from 'react'
import { icons } from '@/data/languages'
import { useLanguageStore } from '@/store/store'
import { Languages } from '@/types'

const VerticalCarrouselLanguages = () => {
  const [curr, setCurr] = useState(0)
  const changeLanguage = useLanguageStore((state) => state.setTechs)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? icons.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === icons.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    const name = icons[curr].name as Languages
    const version = icons[curr].version

    changeLanguage({ name, version })
  }, [curr, changeLanguage])

  return (
    <div className='flex justify-center items-center gap-x-6'>
      <div className='flex items-center justify-center z-20'>
        <button
          onClick={prev}
          className='p-1 text-xs rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          aria-label='Previous Slide'
        >
          Left
        </button>
      </div>
      <div className='w-fit h-[calc(2rem)] overflow-x-hidden'>
        <div className='h-fit w-[calc(2rem)]'>
          <div
            className='flex flex-row gap-x-4 transition-transform ease-out duration-500 h-fit'
            style={{ transform: `translateX(-${curr * (2 + 1)}rem)` }}
          >
            {icons.map(({ name, component: Icon }) => (
              <div
                key={name}
                className='flex-shrink-0 flex items-center justify-center'
              >
                <Icon className='w-8 h-8' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center z-20'>
        <button
          onClick={next}
          className='p-1 text-xs rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          aria-label='Next Slide'
        >
          Right
        </button>
      </div>
    </div>
  )
}

export default VerticalCarrouselLanguages
