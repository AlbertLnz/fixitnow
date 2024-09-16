type Props = {
  language: string
  sourceCode: string
}

const BASE_URL = 'https://emkc.org/api/v2/piston'

export const executeCode = async ({ language, sourceCode }: Props) => {
  console.log(language)
  console.log(sourceCode)

  const data = {
    language: language,
    version: '18.15.0',
    files: [
      {
        content: sourceCode,
      },
    ],
  }

  try {
    const response = await fetch(`${BASE_URL}/execute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorText = await response.text() // Obtener el texto de error para depuración
      console.error('Response error:', errorText)
      throw new Error(`Error ejecutando el código: ${response.statusText}`)
    }

    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.error('Error al ejecutar el código:', error)
    throw error
  }
}
