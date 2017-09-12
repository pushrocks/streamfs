import * as plugins from './streamfs.plugins'

import { ReadStream } from 'fs'

export let createReadStream = (pathArg: string) => {
  return plugins.fs.createReadStream(pathArg)
}
