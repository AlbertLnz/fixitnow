import React from 'react'

const palette_colors = ['bg-orange-400', 'bg-green-500', 'bg-violet-600']

const ExampleEditor = () => {
  return (
    <div className='relative w-[80%] h-full bg-stone-800 flex flex-col items-center justify-center place-content-center mx-auto overflow-hidden'>
      <div className='top-0 mt-2 flex justify-around w-full'>
        <button>PREV</button>
        <h4 className='text-4xl'>Dracula</h4>
        <button>NEXT</button>
      </div>
      <div className='bg-red-400 w-full flex-1 flex justify-between'>
        <div className='w-[85%] bg-green-400'>editor</div>
        <div className='w-[15%] flex flex-col space-y-4 items-center justify-center'>
          {palette_colors.map((color) => (
            <div key={color} className={`size-14 rounded-lg ${color}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExampleEditor
