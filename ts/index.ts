import * as plugins from './streamfs.plugins'

import { ReadStream } from 'fs'
import { WriteStream } from 'fs'
export let createReadStream = (pathArg: string) => {
  return plugins.fs.createReadStream(pathArg)
}

export let createWriteStream = (pathArg: string) => {
  return plugins.fs.createWriteStream(pathArg)
}
