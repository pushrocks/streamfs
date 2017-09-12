import { expect, tap } from 'tapbundle'
import * as streamfs from '../ts/index'

tap.test('should create readstream', async () => {
  streamfs.createReadStream('./test/readable.text.txt')
})

tap.start()
