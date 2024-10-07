import { MutableRefObject, useState } from 'react'
import * as monaco from 'monaco-editor'
import { executeCode } from '../lib/api_axios' // using 'axios' instead of 'fetch' bcs 'fetch' doesn't work
import { Exercise } from '@/types'

type Props = {
  editorRef: MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>
  language: string
  exercises: Exercise[]
  questionNum: number
}

const Output = ({ editorRef, language, exercises, questionNum }: Props) => {
  const [output, setOutput] = useState<string[]>([])
  const [outputStyles, setOutputStyles] = useState('')

  const runCode = async () => {
    if (editorRef) {
      const sourceCode = editorRef?.getValue()
      if (!sourceCode) return

      try {
        const result = await executeCode({ language, sourceCode })
        const answer = result.run.output.split('\n')

        if (answer[0] === exercises[questionNum].answer) {
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
    <section className='relative w-full'>
      <button
        onClick={runCode}
        className='absolute top-0 left-0 -translate-y-full -translate-x-1/2 bg-green-600 p-2.5 uppercase text-xl rounded-t-full'
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
    </section>
  )
}

export default Output
