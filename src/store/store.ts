import { create } from 'zustand'
import {
  Language,
  LanguageStore,
  MonacoEditorSettings,
  MonacoEditorStore,
} from '@/types'

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: {
    name: 'javascript',
    version: '18.15.0',
  },
  setTechs: (language: Language) => {
    set(() => ({ language }))
  },
}))

export const useMonacoEditorStore = create<MonacoEditorStore>((set) => ({
  editorRef: null,
  setEditorRef: (editor) => set({ editorRef: editor }),

  monacoEditorSettings: {
    theme: 'vs',
    options: {
      minimap: {
        enabled: false,
      },
      acceptSuggestionOnEnter: 'off',
      quickSuggestions: false,
      suggestOnTriggerCharacters: false,
      parameterHints: { enabled: false },
      hover: { enabled: false },
      codeLens: false,
      links: false,
      occurrencesHighlight: 'off',
      renderValidationDecorations: 'off',
      wordBasedSuggestions: 'off',
      folding: false,
      rulers: [],
      renderLineHighlight: 'none',
      matchBrackets: 'never',
      theme: 'vs',
    },
  },
  setMonacoEditorSettingsStore: (
    monacoEditorSettings: MonacoEditorSettings
  ) => {
    set((state) => ({
      monacoEditorSettings: {
        ...state.monacoEditorSettings,
        ...monacoEditorSettings,
      },
    }))
  },
}))
