import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '31.6.1:0',
  releaseNotes: {
    en_US:
      'Updated draw.io to 31.6.1. Full list of changes: https://github.com/jgraph/drawio/blob/v31.6.1/ChangeLog',
    es_ES:
      'draw.io actualizado a 31.6.1. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v31.6.1/ChangeLog',
    de_DE:
      'draw.io auf 31.6.1 aktualisiert. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v31.6.1/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 31.6.1. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v31.6.1/ChangeLog',
    fr_FR:
      'draw.io mis à jour vers la version 31.6.1. Liste complète des changements : https://github.com/jgraph/drawio/blob/v31.6.1/ChangeLog',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
