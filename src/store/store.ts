import { create } from 'zustand'
import { Language, LanguageStore } from '@/types'

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: {
    name: 'JavaScript',
    version: '18.15.0',
  },
  setTechs: (language: Language) => {
    set(() => ({ language }))
  },
}))
