import VS from '@/data/themes-json/vs.json'
import VSDark from '@/data/themes-json/vs-dark.json'
import HCBlack from '@/data/themes-json/hc-black.json'
import HCLight from '@/data/themes-json/hc-light.json'
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
    value: 'vs',
    description: '',
    author: '',
    repo: '',
    theme_json: {
      ...VS,
    },
  },
  {
    name: 'vs-dark',
    value: 'vs-dark',
    description: '',
    author: '',
    repo: '',
    theme_json: {
      ...VSDark,
    },
  },
  {
    name: 'hc-black',
    value: 'hc-black',
    description: '',
    author: '',
    repo: '',
    theme_json: {
      ...HCBlack,
    },
  },
  {
    name: 'hc-light',
    value: 'hc-light',
    description: '',
    author: '',
    repo: '',
    theme_json: {
      ...HCLight,
    },
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
