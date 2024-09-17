'use client'

import styles from '@/styles/Username.module.css'
import { useState } from 'react'

const UserSettings = () => {
  const [activeSetting, setActiveSetting] = useState('')

  const settings = [
    { id: 'sett-theme-color', label: 'Edit Theme Color' },
    { id: 'sett-theme-font', label: 'Edit Theme Font' },
    { id: 'sett-pref-lang', label: 'Preferred Language' },
    { id: 'sett-shift-submit', label: 'Shift + Enter to submit the answer' },
    { id: 'red-view-stats', label: 'View Stats' },
    { id: 'sett-stats-pub', label: 'Make Stats public' },
  ]

  return (
    <ul className={`space-y-6 ${styles.user_settings}`}>
      {settings.map((setting) => (
        <li
          key={setting.id}
          id={setting.id}
          onClick={() => setActiveSetting(setting.id)}
          className={activeSetting === setting.id ? 'bg-green-800' : ''}
        >
          {setting.label}
        </li>
      ))}
      <hr />
    </ul>
  )
}

export default UserSettings
