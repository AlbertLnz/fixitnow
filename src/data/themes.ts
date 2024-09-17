export const themes = [
  {
    name: 'Dracula',
    value: 'dracula-theme',
    description: 'A dark theme for many editors, shells, and more',
    author: 'Zeno Rocha',
    repo: 'https://github.com/dracula/dracula-theme',
    monaco_settings: {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '808080' },
        { token: 'string', foreground: 'a0a0a0' },
        { token: 'keyword', foreground: 'f0f0f0' },
        { token: 'number', foreground: 'f0f0f0' },
        { token: 'variable', foreground: 'f0f0f0' },

        { token: 'constant.numeric', foreground: 'f0f0f0' },
        { token: 'constant.language', foreground: 'f0f0f0' },
        { token: 'constant.character', foreground: 'f0f0f0' },
        { token: 'constant.other', foreground: 'f0f0f0' },
        { token: 'constant.regexp', foreground: 'f0f0f0' },

        { token: 'entity.name', foreground: 'f0f0f0' },
        { token: 'entity.name.tag', foreground: 'f0f0f0' },
        { token: 'entity.name.function', foreground: 'f0f0f0' },
        { token: 'entity.other.attribute-name', foreground: 'f0f0f0' },
        { token: 'entity.other.attribute-name.class', foreground: 'f0f0f0' },
        { token: 'entity.other.attribute-name.id', foreground: 'f0f0f0' },

        { token: 'storage', foreground: 'f0f0f0' },
        { token: 'storage.type', foreground: 'f0f0f0' },
        { token: 'storage.modifier', foreground: 'f0f0f0' },
        { token: 'storage.function', foreground: 'f0f0f0' },
        { token: 'storage.class', foreground: 'f0f0f0' },

        { token: 'support.function', foreground: 'f0f0f0' },
        { token: 'support.constant', foreground: 'f0f0f0' },
        { token: 'support.type', foreground: 'f0f0f0' },
        { token: 'support.class', foreground: 'f0f0f0' },

        { token: 'invalid', foreground: 'f0f0f0' },
        { token: 'invalid.deprecated', foreground: 'f0f0f0' },
        { token: 'invalid.illegal', foreground: 'f0f0f0' },
        { token: 'invalid.unimplemented', foreground: 'f0f0f0' },
        { token: 'invalid.unknown', foreground: 'f0f0f0' },
        { token: 'invalid.broken', foreground: 'f0f0f0' },
        { token: 'invalid.ambiguous', foreground: 'f0f0f0' },
      ],
    },
  },
]
