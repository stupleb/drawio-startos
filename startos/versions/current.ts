import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '32.7.7:0',
  releaseNotes: {
    en_US:
      'Updated draw.io to 32.7.7, which adds connection points to many more shapes and keeps link tooltips open while you move to them, and removes the laser pointer from presentation mode. Full list of changes: https://github.com/jgraph/drawio/blob/v32.7.7/ChangeLog',
    es_ES:
      'draw.io actualizado a 32.7.7, que añade puntos de conexión a muchas más formas y mantiene abiertas las descripciones con enlaces mientras te acercas a ellas, y elimina el puntero láser del modo de presentación. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v32.7.7/ChangeLog',
    de_DE:
      'draw.io auf 32.7.7 aktualisiert, mit Verbindungspunkten für viele weitere Formen und Tooltips mit Links, die offen bleiben, während du dich zu ihnen bewegst; der Laserpointer im Präsentationsmodus entfällt. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v32.7.7/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 32.7.7, który dodaje punkty połączeń do wielu kolejnych kształtów i utrzymuje otwarte podpowiedzi z linkami, gdy przesuwasz się do nich, oraz usuwa wskaźnik laserowy z trybu prezentacji. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v32.7.7/ChangeLog',
    fr_FR:
      'draw.io mis à jour vers la version 32.7.7, qui ajoute des points de connexion à de nombreuses autres formes et garde ouvertes les infobulles contenant des liens pendant que vous vous en approchez, et supprime le pointeur laser du mode présentation. Liste complète des changements : https://github.com/jgraph/drawio/blob/v32.7.7/ChangeLog',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
