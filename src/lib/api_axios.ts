import axios from 'axios'

type Props = {
  language: string
  sourceCode: string
}

const API = axios.create({
  baseURL: 'https://emkc.org/api/v2/piston',
})

export const executeCode = async ({ language, sourceCode }: Props) => {
  const response = await API.post('/execute', {
    language: language,
    version: '18.15.0',
    files: [
      {
        content: sourceCode,
      },
    ],
  })
  console.log(response.data)
  return response.data
}
