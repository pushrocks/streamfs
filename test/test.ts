import { expect, tap } from 'tapbundle'
import * as streamfs from '../ts/index'

tap.test('first test', async () => {
  console.log(streamfs.standardExport)
})

tap.start()
