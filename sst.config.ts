import type { SSTConfig } from 'sst'
import { FrontendStack } from './stacks/ClientAppStack'

export default {
  config() {
    return {
      name: 'clientApp',
      region: 'us-east-1',
    }
  },
  stacks(app) {
    app.stack(FrontendStack)
  },
} satisfies SSTConfig
