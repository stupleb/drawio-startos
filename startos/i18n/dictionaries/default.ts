export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting draw.io!': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The draw.io diagram editor': 5,

  // actions/setPrimaryUrl.ts
  'Primary URL': 6,
  'Pick an address that everyone who opens your exported files and links can reach.': 7,
  'Set Primary URL': 8,
  "Choose which of draw.io's addresses to write into HTML exports, embed code and share links. A running draw.io restarts to apply it.": 9,

  // init/watchPrimaryUrl.ts
  'The address used for exported files and share links is no longer available. Choose a new primary URL.': 10,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
