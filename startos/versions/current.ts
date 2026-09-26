import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '31.4.6:0',
  releaseNotes: {
    en_US: 'Initial release of draw.io 31.4.6 for StartOS.',
    es_ES: 'Lanzamiento inicial de draw.io 31.4.6 para StartOS.',
    de_DE: 'Erstveröffentlichung von draw.io 31.4.6 für StartOS.',
    pl_PL: 'Pierwsze wydanie draw.io 31.4.6 dla StartOS.',
    fr_FR: 'Version initiale de draw.io 31.4.6 pour StartOS.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
