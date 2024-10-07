export interface UserRegister {
  email?: string
  email_verified?: boolean
  password?: string
  phone_verified?: boolean
  sub?: string
}

export interface FormObject {
  email: boolean | undefined
  username: boolean | undefined
  password: boolean | undefined
  confirmPassword: boolean | undefined
}

type Languages =
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'java'
  | 'angular' // not supported by 'monaco-editor'
  | 'php'

export interface Language {
  name: Languages
  version: string
}

export interface LanguageStore {
  language: Language
  setTechs: (language: Language) => void
}

// ----

export interface Exercise {
  id: number
  question: string
  answer: string
}

// ----

export interface MonacoEditorSettings {
  theme?: string
  options?: IStandaloneEditorConstructionOptions
}

export interface MonacoEditorStore {
  editorRef: Monaco.editor.IStandaloneCodeEditor | null
  setEditorRef: (editor: Monaco.editor.IStandaloneCodeEditor | null) => void

  monacoEditorSettings: MonacoEditorSettings
  setMonacoEditorSettingsStore: (
    monacoEditorSettings: MonacoEditorSettings
  ) => void
}

// https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html
interface IStandaloneEditorConstructionOptions {
  acceptSuggestionOnCommitCharacter?: boolean
  acceptSuggestionOnEnter?: 'off' | 'on' | 'smart'
  accessibilityHelpUrl?: string
  accessibilityPageSize?: number
  accessibilitySupport?: 'off' | 'on' | 'auto'
  ariaContainerElement?: HTMLElement
  ariaLabel?: string
  ariaRequired?: boolean
  autoClosingBrackets?: EditorAutoClosingStrategy
  autoClosingComments?: EditorAutoClosingStrategy
  autoClosingDelete?: EditorAutoClosingEditStrategy
  autoClosingOvertype?: EditorAutoClosingEditStrategy
  autoClosingQuotes?: EditorAutoClosingStrategy
  autoDetectHighContrast?: boolean
  autoIndent?: 'none' | 'advanced' | 'full' | 'brackets' | 'keep'
  autoSurround?: EditorAutoSurroundStrategy
  automaticLayout?: boolean
  bracketPairColorization?: IBracketPairColorizationOptions
  codeActionsOnSaveTimeout?: number
  codeLens?: boolean
  codeLensFontFamily?: string
  codeLensFontSize?: number
  colorDecorators?: boolean
  colorDecoratorsActivatedOn?: 'clickAndHover' | 'click' | 'hover'
  colorDecoratorsLimit?: number
  columnSelection?: boolean
  comments?: IEditorCommentsOptions
  contextmenu?: boolean
  copyWithSyntaxHighlighting?: boolean
  cursorBlinking?: 'blink' | 'smooth' | 'phase' | 'expand' | 'solid'
  cursorSmoothCaretAnimation?: 'off' | 'on' | 'explicit'
  cursorStyle?:
    | 'line'
    | 'block'
    | 'underline'
    | 'line-thin'
    | 'block-outline'
    | 'underline-thin'
  cursorSurroundingLines?: number
  cursorSurroundingLinesStyle?: 'default' | 'all'
  cursorWidth?: number
  defaultColorDecorators?: boolean
  definitionLinkOpensInPeek?: boolean
  detectIndentation?: boolean
  dimension?: IDimension
  disableLayerHinting?: boolean
  disableMonospaceOptimizations?: boolean
  domReadOnly?: boolean
  dragAndDrop?: boolean
  dropIntoEditor?: IDropIntoEditorOptions
  emptySelectionClipboard?: boolean
  experimentalInlineEdit?: IInlineEditOptions
  experimentalWhitespaceRendering?: 'off' | 'svg' | 'font'
  extraEditorClassName?: string
  fastScrollSensitivity?: number
  find?: IEditorFindOptions
  fixedOverflowWidgets?: boolean
  folding?: boolean
  foldingHighlight?: boolean
  foldingImportsByDefault?: boolean
  foldingMaximumRegions?: number
  foldingStrategy?: 'auto' | 'indentation'
  fontFamily?: string
  fontLigatures?: string | boolean
  fontSize?: number
  fontVariations?: string | boolean
  fontWeight?: string
  formatOnPaste?: boolean
  formatOnType?: boolean
  glyphMargin?: boolean
  gotoLocation?: IGotoLocationOptions
  guides?: IGuidesOptions
  hideCursorInOverviewRuler?: boolean
  hover?: IEditorHoverOptions
  inDiffEditor?: boolean
  inlayHints?: IEditorInlayHintsOptions
  inlineCompletionsAccessibilityVerbose?: boolean
  inlineSuggest?: IInlineSuggestOptions
  insertSpaces?: boolean
  language?: string
  largeFileOptimizations?: boolean
  letterSpacing?: number
  lightbulb?: IEditorLightbulbOptions
  lineDecorationsWidth?: string | number
  lineHeight?: number
  lineNumbers?: LineNumbersType
  lineNumbersMinChars?: number
  linkedEditing?: boolean
  links?: boolean
  matchBrackets?: 'always' | 'never' | 'near'
  matchOnWordStartOnly?: boolean
  maxTokenizationLineLength?: number
  minimap?: IEditorMinimapOptions
  model?: ITextModel
  mouseStyle?: 'default' | 'text' | 'copy'
  mouseWheelScrollSensitivity?: number
  mouseWheelZoom?: boolean
  multiCursorLimit?: number
  multiCursorMergeOverlapping?: boolean
  multiCursorModifier?: 'ctrlCmd' | 'alt'
  multiCursorPaste?: 'spread' | 'full'
  occurrencesHighlight?: 'off' | 'singleFile' | 'multiFile'
  overflowWidgetsDomNode?: HTMLElement
  overviewRulerBorder?: boolean
  overviewRulerLanes?: number
  padding?: IEditorPaddingOptions
  parameterHints?: IEditorParameterHintOptions
  pasteAs?: IPasteAsOptions
  peekWidgetDefaultFocus?: 'tree' | 'editor'
  placeholder?: string
  quickSuggestions?: boolean | IQuickSuggestionsOptions
  quickSuggestionsDelay?: number
  readOnly?: boolean
  readOnlyMessage?: IMarkdownString
  renameOnType?: boolean
  renderControlCharacters?: boolean
  renderFinalNewline?: 'off' | 'on' | 'dimmed'
  renderLineHighlight?: 'all' | 'line' | 'none' | 'gutter'
  renderLineHighlightOnlyWhenFocus?: boolean
  renderValidationDecorations?: 'off' | 'on' | 'editable'
  renderWhitespace?: 'all' | 'none' | 'boundary' | 'selection' | 'trailing'
  revealHorizontalRightPadding?: number
  roundedSelection?: boolean
  rulers?: (number | IRulerOption)[]
  screenReaderAnnounceInlineSuggestion?: boolean
  scrollBeyondLastColumn?: number
  scrollBeyondLastLine?: boolean
  scrollPredominantAxis?: boolean
  scrollbar?: IEditorScrollbarOptions
  selectOnLineNumbers?: boolean
  selectionClipboard?: boolean
  selectionHighlight?: boolean
  // semanticHighlighting.enabled?: boolean | "configuredByTheme";
  showDeprecated?: boolean
  showFoldingControls?: 'always' | 'never' | 'mouseover'
  showUnused?: boolean
  smartSelect?: ISmartSelectOptions
  smoothScrolling?: boolean
  snippetSuggestions?: 'none' | 'top' | 'bottom' | 'inline'
  stablePeek?: boolean
  stickyScroll?: IEditorStickyScrollOptions
  stickyTabStops?: boolean
  stopRenderingLineAfter?: number
  suggest?: ISuggestOptions
  suggestFontSize?: number
  suggestLineHeight?: number
  suggestOnTriggerCharacters?: boolean
  suggestSelection?: 'first' | 'recentlyUsed' | 'recentlyUsedByPrefix'
  tabCompletion?: 'off' | 'on' | 'onlySnippets'
  tabFocusMode?: boolean
  tabIndex?: number
  tabSize?: number
  theme?: 'vs' | 'vs-dark' | 'hc-black' | 'hc-light'
  trimAutoWhitespace?: boolean
  unfoldOnClickAfterEndOfLine?: boolean
  unicodeHighlight?: IUnicodeHighlightOptions
  unusualLineTerminators?: 'off' | 'auto' | 'prompt'
  useShadowDOM?: boolean
  useTabStops?: boolean
  value?: string
  wordBasedSuggestions?:
    | 'off'
    | 'currentDocument'
    | 'matchingDocuments'
    | 'allDocuments'
  wordBasedSuggestionsOnlySameLanguage?: boolean
  wordBreak?: 'normal' | 'keepAll'
  wordSegmenterLocales?: string | string[]
  wordSeparators?: string
  wordWrap?: 'off' | 'on' | 'wordWrapColumn' | 'bounded'
  wordWrapBreakAfterCharacters?: string
  wordWrapBreakBeforeCharacters?: string
  wordWrapColumn?: number
  wordWrapOverride1?: 'off' | 'on' | 'inherit'
  wordWrapOverride2?: 'off' | 'on' | 'inherit'
  wrappingIndent?: 'none' | 'same' | 'indent' | 'deepIndent'
  wrappingStrategy?: 'simple' | 'advanced'
}
