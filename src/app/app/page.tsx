'use client'

import Header from '@/sections/Header'
import { useEffect, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import Output from '@/components/Output'
import { useLanguageStore, useMonacoEditorStore } from '@/store/store'
import { Exercise } from '@/types'
import VerticalCarrouselLanguages from '@/components/VerticalCarrouselLanguages'

const App = () => {
  const languageStore = useLanguageStore((state) => state.language)
  const { editorRef, setEditorRef, monacoEditorSettings } =
    useMonacoEditorStore()

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [questionNum, setQuestionNum] = useState<number>(0)

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    if (editorRef === null) {
      setEditorRef(editor)
    }
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
    <>
      <Header />
      <div className='grid grid-rows-[auto_1fr] grid-cols-[0.3fr_0.7fr] px-10'>
        <div className='col-span-2 grid grid-cols-2 text-2xl py-2'>
          <div className='flex justify-between items-center px-14'>
            <VerticalCarrouselLanguages />
            <div className='flex items-center justify-center gap-x-6'>
              <button onClick={prevQuestion}>Prev</button>
              <p>Level {questionNum + 1}</p>
              <button onClick={nextQuestion}>Next</button>
            </div>
          </div>
          <p className='flex justify-self-end pr-4'>Output</p>
        </div>
        <div
          id='code-container'
          className='flex-grow col-span-2 grid grid-cols-2'
        >
          <Editor
            className='w-[100px]'
            loading={'LOADING...'}
            options={monacoEditorSettings.options}
            height='40vh'
            theme={monacoEditorSettings.theme}
            language={languageStore.name}
            value={exercises[questionNum]?.question || ''}
            onMount={onMount}
          />
          <Output
            editorRef={editorRef}
            language={languageStore.name}
            exercises={exercises}
            questionNum={questionNum}
          />
        </div>
      </div>
    </>
  )
}

export default App
