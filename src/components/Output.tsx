import { MutableRefObject, useState } from 'react'
import * as monaco from 'monaco-editor'
import { executeCode } from '../lib/api_axios' // using 'axios' instead of 'fetch' bcs 'fetch' doesn't work
import { js_exercises } from '@/data/js_exercises'

type Props = {
  editorRef: MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>
  language: string
}

const Output = ({ editorRef, language }: Props) => {
  const [output, setOutput] = useState<string[]>([])
  const [outputStyles, setOutputStyles] = useState('')

  const runCode = async () => {
    if (editorRef) {
      const sourceCode = editorRef.current?.getValue()
      if (!sourceCode) return

      try {
        const result = await executeCode({ language, sourceCode })
        const answer = result.run.output.split('\n')

        if (answer[0] === js_exercises[0].answer) {
          setOutputStyles('text-green-600')
          setOutput(['Correct!'])
        } else {
          setOutputStyles('text-red-600')
          setOutput(['Wrong!'])
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='relative w-full'>
      <button
        onClick={runCode}
        className='absolute bottom-0 left-0 bg-green-600 p-4 uppercase text-2xl'
      >
        run!
      </button>
      <div className='border-2 bg-[#292929] w-full h-full'>
        {output
          ? output.map((line, i) => (
              <p key={i} className={`text-8xl p-6 ${outputStyles}`}>
                {line}
              </p>
            ))
          : ''}
      </div>
    </div>
  )
}

export default Output
