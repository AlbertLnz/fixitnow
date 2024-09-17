'use client'

import { useState } from 'react'

type Props = {
  settingSelected: (setting: string) => void
}

const UserSettings = ({ settingSelected }: Props) => {
  const [activeSetting, setActiveSetting] = useState('sett-theme-color')

  const settings = [
    { id: 'sett-theme-color', label: 'Edit Theme Color', classnames: '' },
    { id: 'sett-theme-font', label: 'Edit Theme Font', classnames: '' },
    { id: 'sett-pref-lang', label: 'Preferred Language', classnames: '' },
    {
      id: 'sett-shift-submit',
      label: 'Shift + Enter to submit the answer',
      classnames: '',
    },
    { id: 'red-view-stats', label: 'View Stats', classnames: '' },
    { id: 'sett-stats-pub', label: 'Make Stats public', classnames: '' },
  ]

  const handleClick = (setting: string) => {
    setActiveSetting(setting)
    settingSelected(setting)
  }

  return (
    <ul className='space-y-4 flex flex-col items-start justify-center px-8'>
      <li
        id='back-home'
        className='pl-4 pr-6 py-1 text-sky-500 cursor-pointer hover:bg-[#1633656b]'
      >
        <a href='/'>⇤ Back to Home</a>
      </li>
      {settings.map((setting) => (
        <li
          key={setting.id}
          id={setting.id}
          onClick={() => handleClick(setting.id)}
          className={`${
            activeSetting === setting.id
              ? 'bg-green-800 rounded-md'
              : 'hover:bg-[#1665346b] rounded-md hover:cursor-pointer hover:transition-colors duration-200 ease-linear'
          } ${setting.classnames} pl-4 pr-6 py-1`}
        >
          {setting.label}
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
