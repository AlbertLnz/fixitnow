'use client'

import { useEffect, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import Output from './Output'
import { useLanguageStore } from '@/store/store'
import { Exercise } from '@/types'

type Props = {
  classname: string
}

const CodeEditor = ({ classname }: Props) => {
  const languageStore = useLanguageStore((state) => state.language)
  const [exercises, setExercises] = useState<Exercise[]>([])
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [questionNum, setQuestionNum] = useState<number>(0)

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor
    editor.focus()
  }

  const prevQuestion = () => {
    questionNum === 0
      ? setQuestionNum(exercises.length - 1)
      : setQuestionNum((prev) => prev - 1)
  }

  const nextQuestion = () => {
    questionNum === exercises.length - 1
      ? setQuestionNum(0)
      : setQuestionNum((prev) => prev + 1)
  }

  useEffect(() => {
    const loadExercises = async () => {
      const file = await import('@/data/exercises')
      const exercisesKey =
        `${languageStore.name.toLowerCase()}_exercises` as keyof typeof file

      if (file[exercisesKey]) {
        setExercises(file[exercisesKey])
      }
    }

    loadExercises()
    setQuestionNum(0)
  }, [languageStore])

  return (
    <div className='grid grid-cols-2 w-full'>
      <div className='col-span-2 grid grid-cols-2 text-center text-2xl py-2'>
        <div className='flex items-center justify-center gap-x-6'>
          <button onClick={prevQuestion}>Prev</button>
          <p>Level {questionNum + 1}</p>
          <button onClick={nextQuestion}>Next</button>
        </div>
        <p>Output</p>
      </div>
      <Editor
        className={`${classname} w-[100px]`}
        loading={'LOADING...'}
        options={{
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
        }}
        height='25vh'
        theme='vs-dark'
        language={languageStore.name}
        value={exercises[questionNum]?.question || ''}
        onMount={onMount}
        // onChange={(value) => setValue(value)}
      />
      <Output
        editorRef={editorRef}
        language={languageStore.name}
        exercises={exercises}
        questionNum={questionNum}
      />
    </div>
  )
}

export default CodeEditor
