'use client'

import { themes } from '@/data/themes'
import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { useMonacoEditorStore } from '@/store/store'
import { useEffect, useState } from 'react'

type Props = {
  settingSelected: string
}

const ExampleEditor = ({ settingSelected }: Props) => {
  const { setEditorRef } = useMonacoEditorStore()

  const [runSetting, setRunSetting] = useState<{
    arr: string[]
    arr_selected: string
    palette: string[]
  }>({
    arr: [],
    arr_selected: '',
    palette: [],
  })

  const handleEditorDidMount = (monacoInstance: typeof monaco) => {
    const theme_object = themes.find(
      (theme) => theme.name === runSetting.arr_selected
    )

    if (runSetting.arr_selected === '') return

    monacoInstance.editor.defineTheme(runSetting.arr_selected, {
      ...theme_object?.theme_json,
    })
  }

  const prev = () => {
    if (runSetting.arr.length < 1) return
    setRunSetting((prevRunSetting) => {
      const currIndex = prevRunSetting.arr.indexOf(prevRunSetting.arr_selected)
      const newIndex =
        currIndex === 0 ? prevRunSetting.arr.length - 1 : currIndex - 1
      return {
        ...prevRunSetting,
        arr_selected: prevRunSetting.arr[newIndex],
      }
    })
  }

  const next = () => {
    if (runSetting.arr.length < 1) return
    setRunSetting((prevRunSetting) => {
      const currIndex = prevRunSetting.arr.indexOf(prevRunSetting.arr_selected)
      const newIndex =
        currIndex === prevRunSetting.arr.length - 1 ? 0 : currIndex + 1
      return {
        ...prevRunSetting,
        arr_selected: prevRunSetting.arr[newIndex],
      }
    })
  }

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    setEditorRef(editor)
    editor.focus()
  }

  useEffect(() => {
    if (settingSelected === 'sett-theme-color') {
      setRunSetting({
        arr: themes.map((theme) => theme.name),
        arr_selected: themes[0].name,
        palette: ['bg-orange-400', 'bg-green-500', 'bg-violet-600'],
      })
    }
  }, [settingSelected])

  return (
    <div className='relative w-[80%] h-full bg-stone-800 flex flex-col items-center justify-center place-content-center mx-auto overflow-hidden'>
      <div className='top-0 mt-2 flex justify-around w-full'>
        <button onClick={prev}>Prev</button>
        <h4 className='text-4xl'>{runSetting.arr_selected}</h4>
        <button onClick={next}>Next</button>
      </div>
      <div className='bg-red-400 w-full flex-1 flex justify-between'>
        <div className='w-[85%] bg-green-400'>
          <Editor
            key={runSetting.arr_selected}
            className={`w-[100px]`}
            loading={'LOADING...'}
            height='25vh'
            language='javascript'
            beforeMount={handleEditorDidMount}
            onMount={onMount}
            theme={runSetting.arr_selected}
            defaultValue='console.log(Hello World!!)'
          />
        </div>
        <div className='w-[15%] flex flex-col space-y-4 items-center justify-center'>
          {runSetting.palette.map((color) => (
            <div key={color} className={`size-14 rounded-lg ${color}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExampleEditor
