'use client'

type Props = {
  classname: string
}

import { Editor } from '@monaco-editor/react'

const CodeEditor = ({ classname }: Props) => {
  return (
    <Editor
      className={`${classname}`}
      loading={'LOADING...'}
      options={{
        minimap: {
          enabled: false,
        },
      }}
      height='25vh'
      theme='vs-dark'
      language='javascript'
      defaultValue='// Write your code here'
    />
  )
}

export default CodeEditor
