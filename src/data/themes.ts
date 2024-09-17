import OneDarkPro from '@/data/themes-json/onedark-pro.json'

type Theme = {
  name: string
  value: string
  description: string
  author: string
  repo: string
  theme_json: IStandaloneThemeData
}

export const themes: Theme[] = [
  {
    name: 'vs',
    value: 'vs-code',
    description: '',
    author: '',
    repo: '',
    theme_json: {},
  },
  {
    name: 'vs-dark',
    value: '',
    description: '',
    author: '',
    repo: '',
    theme_json: {},
  },
  {
    name: 'hc-black',
    value: '',
    description: '',
    author: '',
    repo: '',
    theme_json: {},
  },
  {
    name: 'hc-light',
    value: '',
    description: '',
    author: '',
    repo: '',
    theme_json: {},
  },
  {
    name: 'OneDarkPro',
    value: 'onedark-pro',
    description: 'A dark theme for many editors, shells, and more',
    author: 'Binaryify',
    repo: 'https://github.com/Binaryify/OneDark-Pro',
    theme_json: {
      ...OneDarkPro,
    },
  },
]
