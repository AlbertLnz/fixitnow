'use client'

import { useState } from 'react'
import { icons } from '@/data/languages'

const VerticalCarrouselLanguages = () => {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? icons.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === icons.length - 1 ? 0 : curr + 1))

  // console.log(icons[curr].name)

  return (
    <div className='relative'>
      <div className='overflow-hidden w-fit h-[calc(9rem+1rem)]'>
        <div
          className='flex flex-col gap-y-4 transition-transform ease-out duration-500 w-fit'
          style={{ transform: `translateY(-${curr * (9 + 1)}rem)` }}
        >
          {icons.map(({ name, component: Icon }) => (
            <div
              key={name}
              className='flex-shrink-0 flex items-center justify-center'
            >
              <Icon className='w-36 h-36' />
            </div>
          ))}
        </div>
      </div>
      {/* Button Up */}
      <div className='absolute flex flex-col -top-10 w-36 items-center justify-center z-20'>
        <button
          onClick={prev}
          className='p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          aria-label='Previous Slide'
        >
          Up
        </button>
      </div>
      {/* Button Down */}
      <div className='absolute flex flex-col top-36 w-36 items-center justify-center z-20'>
        <button
          onClick={next}
          className='p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          aria-label='Next Slide'
        >
          Down
        </button>
      </div>
    </div>
  )
}

export default VerticalCarrouselLanguages
