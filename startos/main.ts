import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting draw.io!'))

  const primaryUrl = (
    await storeJson.read((s) => s.primaryUrl).const(effects)
  )?.replace(/\/+$/, '')

  // Without it the entrypoint derives an absolute server URL from DRAWIO_BASE_URL.
  const env: Record<string, string> = { DRAWIO_SERVER_URL: '/' }
  if (primaryUrl) {
    env.DRAWIO_BASE_URL = primaryUrl
    env.DRAWIO_LIGHTBOX_URL = primaryUrl
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
