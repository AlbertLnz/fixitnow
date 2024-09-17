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
  palette: string[]
  theme_json: IStandaloneThemeData
}

export const themes: Theme[] = [
  {
    name: 'vs',
    value: 'vs',
    description: '',
    author: '',
    repo: '',
    palette: [
      'bg-violet-400',
      'bg-green-500',
      'bg-yellow-600',
      'bg-red-600',
      'bg-blue-600',
    ],
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
    palette: [
      'bg-black',
      'bg-stone-500',
      'bg-white',
      'bg-slate-600',
      'bg-gray-600',
    ],
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
    palette: [
      'bg-purple-400',
      'bg-lime-500',
      'bg-amber-600',
      'bg-yellow-600',
      'bg-white',
    ],
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
    palette: [
      'bg-orange-400',
      'bg-green-500',
      'bg-sky-600',
      'bg-teal-600',
      'bg-zinc-600',
    ],
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
    palette: [
      'bg-orange-400',
      'bg-green-500',
      'bg-violet-600',
      'bg-cyan-600',
      'bg-fuchsia-600',
    ],
    theme_json: {
      ...OneDarkPro,
    },
  },
]
