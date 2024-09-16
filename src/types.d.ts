type Languages =
  | 'JavaScript'
  | 'TypeScript'
  | 'HTML'
  | 'Java'
  | 'Angular'
  | 'PHP'

export interface Language {
  name: Languages
  version: string
}

export interface LanguageStore {
  language: Language
  setTechs: (language: Language) => void
}

// ----

export interface Exercise {
  id: number
  question: string
  answer: string
}
