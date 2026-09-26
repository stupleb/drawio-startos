import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const uiPort = 8080

export const uiHostId = 'ui-multi'
export const uiInterfaceId = 'ui'

export const uiUrls = (effects: T.Effects) =>
  sdk.host.getOwn(effects, uiHostId, (host) => {
    const ui = Object.values(host?.bindings ?? {})
      .flatMap((b) => Object.values(b.interfaces))
      .find((i) => i.id === uiInterfaceId)
    const all = ui?.addressInfo.nonLocal.format() ?? []
    const mdns =
      ui?.addressInfo.nonLocal.filter({ kind: 'mdns' }).format() ?? []
    return { all, preferred: mdns[0] ?? all[0] }
  })
