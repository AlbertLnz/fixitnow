'use client'

import { useRef } from 'react'
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

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor
    editor.focus()
  }

  return (
    <div className='grid grid-cols-2 w-full'>
      <div className='col-span-2 grid grid-cols-2 text-center text-2xl py-2'>
        <p>Level 1</p>
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
        value={js_exercises[0].question}
        onMount={onMount}
        // onChange={(value) => setValue(value)}
      />
      <Output editorRef={editorRef} language={language} />
    </div>
  )
}

export default CodeEditor
