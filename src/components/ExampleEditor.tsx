'use client'

import { themes } from '@/data/themes'
import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { useMonacoEditorStore } from '@/store/store'
import { useState } from 'react'

const palette_colors = ['bg-orange-400', 'bg-green-500', 'bg-violet-600']
const themeList = themes.map((theme) => theme.name)

const ExampleEditor = () => {
  const { setEditorRef } = useMonacoEditorStore()

  const [themeSelected, setThemeSelected] = useState(themeList[0])

  const handleEditorDidMount = (monacoInstance: typeof monaco) => {
    const theme_object = themes.find((theme) => theme.name === themeSelected)

    monacoInstance.editor.defineTheme(themeSelected, {
      ...theme_object?.theme_json,
    })
  }

  const prev = () => {
    setThemeSelected((prevTheme) => {
      const currIndex = themeList.indexOf(prevTheme)
      const newIndex = currIndex === 0 ? themeList.length - 1 : currIndex - 1
      return themeList[newIndex]
    })
  }

  const next = () => {
    setThemeSelected((prevTheme) => {
      const currIndex = themeList.indexOf(prevTheme)
      const newIndex = currIndex === themeList.length - 1 ? 0 : currIndex + 1
      return themeList[newIndex]
    })
  }

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    setEditorRef(editor)
    editor.focus()
  }

  return (
    <div className='relative w-[80%] h-full bg-stone-800 flex flex-col items-center justify-center place-content-center mx-auto overflow-hidden'>
      <div className='top-0 mt-2 flex justify-around w-full'>
        <button onClick={prev}>Prev</button>
        <h4 className='text-4xl'>{themeSelected}</h4>
        <button onClick={next}>Next</button>
      </div>
      <div className='bg-red-400 w-full flex-1 flex justify-between'>
        <div className='w-[85%] bg-green-400'>
          <Editor
            key={themeSelected}
            className={`w-[100px]`}
            loading={'LOADING...'}
            height='25vh'
            language='javascript'
            beforeMount={handleEditorDidMount}
            onMount={onMount}
            theme={themeSelected}
          />
        </div>
        <div className='w-[15%] flex flex-col space-y-4 items-center justify-center'>
          {palette_colors.map((color) => (
            <div key={color} className={`size-14 rounded-lg ${color}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExampleEditor
