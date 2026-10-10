import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '32.4.1:0',
  releaseNotes: {
    en_US:
      "Updated draw.io to 32.4.1. While the primary URL is not one of draw.io's addresses, exports and share links use its public domain, or its .local address if it has none, and a task asks you to choose another. Full list of changes: https://github.com/jgraph/drawio/blob/v32.4.1/ChangeLog",
    es_ES:
      'draw.io actualizado a 32.4.1. Mientras la URL principal no sea una de las direcciones de draw.io, las exportaciones y los enlaces compartidos usan su dominio público, o su dirección .local si no tiene ninguno, y una tarea te pide elegir otra. Lista completa de cambios: https://github.com/jgraph/drawio/blob/v32.4.1/ChangeLog',
    de_DE:
      'draw.io auf 32.4.1 aktualisiert. Solange die primäre URL keine Adresse von draw.io ist, verwenden Exporte und geteilte Links seine öffentliche Domain oder, wenn es keine hat, seine .local-Adresse, und eine Aufgabe fordert dich auf, eine andere zu wählen. Vollständige Liste der Änderungen: https://github.com/jgraph/drawio/blob/v32.4.1/ChangeLog',
    pl_PL:
      'Zaktualizowano draw.io do 32.4.1. Dopóki główny adres URL nie jest jednym z adresów draw.io, eksporty i udostępniane linki używają jego domeny publicznej, a jeśli jej nie ma, adresu .local, a zadanie prosi o wybranie innego. Pełna lista zmian: https://github.com/jgraph/drawio/blob/v32.4.1/ChangeLog',
    fr_FR:
      "draw.io mis à jour vers la version 32.4.1. Tant que l'URL principale n'est pas l'une des adresses de draw.io, les exports et les liens de partage utilisent son domaine public, ou son adresse .local s'il n'en a pas, et une tâche vous demande d'en choisir une autre. Liste complète des changements : https://github.com/jgraph/drawio/blob/v32.4.1/ChangeLog",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
