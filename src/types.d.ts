type Languages =
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'java'
  | 'angular' // not supported by 'monaco-editor'
  | 'php'

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
