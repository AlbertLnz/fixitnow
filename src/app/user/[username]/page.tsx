'use client'

import ExampleEditor from '@/components/ExampleEditor'
import UserSettings from '@/components/UserSettings'
import { useState } from 'react'

type Props = {
  params: { username: string }
}

const Username = ({ params }: Props) => {
  const [settingSelected, setSettingSelected] = useState('')

  return (
    <>
      <main className='flex flex-col py-20 px-20 space-y-10'>
        <h1 className='text-9xl flex justify-start items-end'>
          {params.username}&apos;s&nbsp;
          <span className='text-8xl self-end mb-1'>settings</span>
        </h1>

        <div className='grid grid-cols-10'>
          <div className='col-span-4 text-4xl'>
            <UserSettings settingSelected={setSettingSelected} />
          </div>
          <div className='col-span-6'>
            <ExampleEditor settingSelected={settingSelected} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Username
