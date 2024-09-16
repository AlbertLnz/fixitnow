'use client'

import { useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import Output from './Output'
import { js_exercises } from '@/data/js_exercises'

type Props = {
  classname: string
}

const language = 'javascript'

const CodeEditor = ({ classname }: Props) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [questionNum, setQuestionNum] = useState<number>(0)

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor
    editor.focus()
  }

  const prevQuestion = () => {
    questionNum === 0
      ? setQuestionNum(js_exercises.length - 1)
      : setQuestionNum((prev) => prev - 1)
  }

  const nextQuestion = () => {
    questionNum === js_exercises.length - 1
      ? setQuestionNum(0)
      : setQuestionNum((prev) => prev + 1)
  }

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
        language={language}
        value={js_exercises[questionNum].question}
        onMount={onMount}
        // onChange={(value) => setValue(value)}
      />
      <Output
        editorRef={editorRef}
        language={language}
        questionNum={questionNum}
      />
    </div>
  )
}

export default CodeEditor
