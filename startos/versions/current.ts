import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '32.5.5:0',
  releaseNotes: {
    en_US:
      'Updated draw.io to 32.5.5. Replace All now works across All Pages, and the SQL, animation, WebCola, Freemind import, F5 rack, flow and edge connection plugins are removed. Full list of changes: https://github.com/jgraph/drawio/blob/v32.5.5/ChangeLog',
    es_ES:
      'draw.io actualizado a 32.5.5. Reemplazar todo ahora funciona en Todas las páginas, y se eliminan los complementos SQL, animación, WebCola, importación de Freemind, rack F5, flujo y conexión de aristas. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v32.5.5/ChangeLog',
    de_DE:
      'draw.io auf 32.5.5 aktualisiert. Alle ersetzen funktioniert jetzt über Alle Seiten, und die Plugins SQL, Animation, WebCola, Freemind-Import, F5-Rack, Flow und Kantenverbindung wurden entfernt. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v32.5.5/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 32.5.5. Zamień wszystkie działa teraz na Wszystkie strony, a wtyczki SQL, animacji, WebCola, importu Freemind, szafy F5, przepływu i połączeń krawędzi zostały usunięte. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v32.5.5/ChangeLog',
    fr_FR:
      'draw.io mis à jour vers la version 32.5.5. Tout remplacer fonctionne désormais sur Toutes les pages, et les plugins SQL, animation, WebCola, import Freemind, baie F5, flux et connexion des liens sont supprimés. Liste complète des changements : https://github.com/jgraph/drawio/blob/v32.5.5/ChangeLog',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
