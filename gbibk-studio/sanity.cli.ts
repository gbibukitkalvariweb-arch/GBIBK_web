import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qt8qfjbm',
    dataset: 'production'
  },
  studioHost: 'gbi-bukit-kalvari',
  // TAMBAHIN INI BIAR MAKIN CAKEP:
  deployment: {
    appId: 'vlm0uaay2gomdwu039hqotwk'
  }
})