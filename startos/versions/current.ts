import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '32.6.1:0',
  releaseNotes: {
    en_US:
      'Updated draw.io to 32.6.1, which adds an inline toolbar for shapes, a diagram explorer, a laser pointer in presentation mode, and edge labels that cut a gap in their line. Full list of changes: https://github.com/jgraph/drawio/blob/v32.6.1/ChangeLog',
    es_ES:
      'draw.io actualizado a 32.6.1, que añade una barra de herramientas en línea para las formas, un explorador de diagramas, un puntero láser en el modo de presentación y etiquetas de conectores que abren un hueco en su línea. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v32.6.1/ChangeLog',
    de_DE:
      'draw.io auf 32.6.1 aktualisiert, mit einer Inline-Werkzeugleiste für Formen, einem Diagramm-Explorer, einem Laserpointer im Präsentationsmodus sowie Verbinderbeschriftungen, die eine Lücke in ihre Linie schneiden. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v32.6.1/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 32.6.1, który dodaje wbudowany pasek narzędzi dla kształtów, eksplorator diagramów, wskaźnik laserowy w trybie prezentacji oraz etykiety łączników wycinające przerwę w linii. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v32.6.1/ChangeLog',
    fr_FR:
      "draw.io mis à jour vers la version 32.6.1, qui ajoute une barre d'outils intégrée pour les formes, un explorateur de diagrammes, un pointeur laser en mode présentation, ainsi que des libellés de connecteurs qui découpent un espace dans leur ligne. Liste complète des changements : https://github.com/jgraph/drawio/blob/v32.6.1/ChangeLog",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
