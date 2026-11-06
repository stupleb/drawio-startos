import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '32.6.10:0',
  releaseNotes: {
    en_US:
      'Updated draw.io to 32.6.10, which adds page groups to the page tabs, keyboard access throughout the editor, and ring and dot variants of the flow animation. Full list of changes: https://github.com/jgraph/drawio/blob/v32.6.10/ChangeLog',
    es_ES:
      'draw.io actualizado a 32.6.10, que añade grupos de páginas en las pestañas de página, acceso por teclado en todo el editor y variantes de anillos y puntos de la animación de flujo. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v32.6.10/ChangeLog',
    de_DE:
      'draw.io auf 32.6.10 aktualisiert, mit Seitengruppen in den Seitenreitern, Tastaturbedienung im gesamten Editor sowie Ring- und Punktvarianten der Flussanimation. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v32.6.10/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 32.6.10, który dodaje grupy stron w kartach stron, obsługę klawiaturą w całym edytorze oraz warianty animacji przepływu z pierścieniami i kropkami. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v32.6.10/ChangeLog',
    fr_FR:
      "draw.io mis à jour vers la version 32.6.10, qui ajoute des groupes de pages dans les onglets de page, l'accès au clavier dans tout l'éditeur et des variantes en anneaux et en points de l'animation de flux. Liste complète des changements : https://github.com/jgraph/drawio/blob/v32.6.10/ChangeLog",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
