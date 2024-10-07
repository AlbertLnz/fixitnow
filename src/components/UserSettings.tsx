'use client'

import { ChangeEvent, useState } from 'react'
import Link from 'next/link'

type Props = {
  settingSelected: (setting: string) => void
}

const UserSettings = ({ settingSelected }: Props) => {
  const [activeSetting, setActiveSetting] = useState('sett-theme-color')

  const settings = [
    {
      id: 'sett-theme-color',
      label: 'Edit Theme Color',
      checkbox: false,
      classnames: '',
    },
    {
      id: 'sett-theme-font',
      label: 'Edit Theme Font',
      checkbox: false,
      classnames: '',
    },
    {
      id: 'sett-pref-lang',
      label: 'Preferred Language',
      checkbox: false,
      classnames: '',
    },
    {
      id: 'sett-shift-submit',
      label: 'Shift + Enter to submit the answer',
      checkbox: true,
      classnames: '',
    },
    {
      id: 'redir-view-stats',
      label: 'View Stats',
      checkbox: false,
      classnames: '',
    },
    {
      id: 'sett-stats-pub',
      label: 'Make Stats public',
      checkbox: true,
      classnames: '',
    },
  ]

  const handleClick = (setting: string) => {
    setActiveSetting(setting)
    settingSelected(setting)
  }

  const handleCheckboxChange = (
    evt: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    console.log(`Checkbox '${id}' changed to`, evt.target.checked)
  }

  return (
    <ul className='space-y-4 flex flex-col items-start justify-center px-8'>
      <li
        id='back-home'
        className='pl-4 pr-6 py-1 text-sky-500 rounded-md cursor-pointer hover:bg-[#1633656b]'
      >
        <Link href='/app'>⇤ Back to Home</Link>
      </li>
      {settings.map((setting) => (
        <li
          key={setting.id}
          id={setting.id}
          onClick={() => handleClick(setting.id)}
          className={`${
            activeSetting === setting.id
              ? 'bg-green-800 rounded-md'
              : 'hover:bg-[#1665346b] flex items-center justify-center rounded-md hover:cursor-pointer hover:transition-colors duration-200 ease-linear'
          } ${setting.classnames} pl-4 pr-6 py-1`}
        >
          {setting.label}
          {setting.checkbox && (
            <input
              type='checkbox'
              id={`${setting.id}-checkbox`}
              onChange={(evt) => handleCheckboxChange(evt, setting.id)}
              className='ml-6 size-7 accent-slate-300 hover:accent-slate-400 active:accent-slate-200 hover:cursor-pointer'
            />
          )}
        </li>
      ))}
      <li
        id='save-settings'
        className='pl-4 pr-6 py-1 text-yellow-500 cursor-pointer'
      >
        Save Settings
      </li>
    </ul>
  )
}

export default UserSettings
