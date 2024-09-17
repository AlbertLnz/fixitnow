'use client'

import { themes } from '@/data/themes'
import { fonts } from '@/data/fonts'
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
  }>({
    arr: themes.map((theme) => theme.name),
    arr_selected: themes[0].name,
  })

  const handleEditorDidMount = (monacoInstance: typeof monaco) => {
    if (settingSelected !== 'sett-theme-color') return

    const theme_object = themes.find(
      (theme) => theme.name === runSetting.arr_selected
    )
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
      })
    }

    if (settingSelected === 'sett-theme-font') {
      setRunSetting({
        arr: fonts.map((font) => font.name),
        arr_selected: fonts[0].name,
      })
    }
  }, [settingSelected])

  return (
    <div className='relative w-[80%] h-full bg-stone-900 flex flex-col items-center justify-center place-content-center mx-auto overflow-hidden py-6 pl-6'>
      <div className='relative top-0 left-0 mb-4 flex justify-around items-center w-[85%] place-self-start'>
        <button
          onClick={prev}
          className='absolute left-16 text-5xl transform scale-x-[-1] hover:text-green-800 transition-colors duration-500 ease-in-out'
        >
          ➭
        </button>
        <h4 className='text-4xl'>{runSetting.arr_selected}</h4>
        <button
          onClick={next}
          className='absolute right-16 text-5xl hover:text-green-800 transition-colors duration-500 ease-in-out'
        >
          ➭
        </button>
      </div>
      <div className='w-full flex-1 flex justify-between'>
        <div className='w-[85%]'>
          <Editor
            key={runSetting.arr_selected}
            className={`w-[100px]`}
            loading={'LOADING...'}
            language='javascript'
            options={{
              fontFamily: `${
                settingSelected === 'sett-theme-font'
                  ? runSetting.arr_selected
                  : 'Inter'
              }`,
              fontSize: 20,
              fontLigatures: true,
              minimap: {
                enabled: false,
              },
            }}
            beforeMount={handleEditorDidMount}
            onMount={onMount}
            theme={runSetting.arr_selected}
            defaultValue='console.log("Hello World!!")'
          />
        </div>
        <div className='w-[15%] flex flex-col space-y-4 items-center justify-center'>
          {runSetting.arr_selected
            ? themes
                .find((theme) => theme.name === runSetting.arr_selected)
                ?.palette.map((color) => (
                  <div
                    key={color}
                    className={`size-14 rounded-lg ${color}`}
                  ></div>
                ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default ExampleEditor
