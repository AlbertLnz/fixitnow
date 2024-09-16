'use client'

import { Editor } from '@monaco-editor/react'

const CodeEditor = () => {
  return (
    <Editor
      options={{
        minimap: {
          enabled: false,
        },
      }}
      height='75vh'
      theme='vs-dark'
      language='javascript'
      defaultValue='// Write your code here'
    />
  )
}

export default CodeEditor
