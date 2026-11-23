import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '32.7.4:0',
  releaseNotes: {
    en_US:
      'Updated draw.io to 32.7.4, which adds Insert > From Text > Table to turn CSV text into an editable table, and keeps the width and height you type in image exports. Full list of changes: https://github.com/jgraph/drawio/blob/v32.7.4/ChangeLog',
    es_ES:
      'draw.io actualizado a 32.7.4, que añade Insertar > Desde el texto > Tabla para convertir texto CSV en una tabla editable y conserva el ancho y el alto que escribes en las exportaciones de imágenes. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v32.7.4/ChangeLog',
    de_DE:
      'draw.io auf 32.7.4 aktualisiert, mit Einfügen > Aus Text > Tabelle, das CSV-Text in eine bearbeitbare Tabelle umwandelt, und eingegebene Breiten und Höhen bleiben in Bildexporten erhalten. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v32.7.4/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 32.7.4, który dodaje Wstaw > Z tekstu > Tabela, zamieniające tekst CSV w edytowalną tabelę, i zachowuje wpisaną szerokość i wysokość w eksporcie obrazów. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v32.7.4/ChangeLog',
    fr_FR:
      "draw.io mis à jour vers la version 32.7.4, qui ajoute Insérer > À partir d'un texte > Tableau pour transformer du texte CSV en tableau modifiable, et conserve la largeur et la hauteur saisies dans les exports d'images. Liste complète des changements : https://github.com/jgraph/drawio/blob/v32.7.4/ChangeLog",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
