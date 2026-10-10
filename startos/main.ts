import { i18n } from './i18n'
import { primaryUrl } from './primaryUrl'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting draw.io!'))

  const baseUrl = await primaryUrl.bestUsable(effects).const()

  // Without it the entrypoint derives an absolute server URL from DRAWIO_BASE_URL.
  const env: Record<string, string> = { DRAWIO_SERVER_URL: '/' }
  if (baseUrl) {
    env.DRAWIO_BASE_URL = baseUrl
    env.DRAWIO_LIGHTBOX_URL = baseUrl
  }

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sdk.SubContainer.of(
      effects,
      { imageId: 'drawio' },
      null,
      'drawio-sub',
    ),
    exec: { command: sdk.useEntrypoint(), env },
    // Tomcat opens the port only after the editor has deployed.
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
    },
    requires: [],
  })
})
