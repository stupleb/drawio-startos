import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'drawio',
  title: 'draw.io',
  license: 'Apache-2.0',
  packageRepo: 'https://github.com/stupleb/drawio-startos',
  upstreamRepo: 'https://github.com/jgraph/drawio',
  marketingUrl: 'https://www.drawio.com',
  donationUrl: null,
  description: { short, long },
  volumes: ['startos'],
  images: {
    drawio: {
      source: { dockerTag: 'jgraph/drawio:31.4.6' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
