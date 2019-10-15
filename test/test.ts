import { expect, tap } from '@pushrocks/tapbundle';
import * as streamfs from '../ts/index';

let readableStream;
let writableStream;

tap.test('should create readstream', async () => {
  readableStream = streamfs.createReadStream('./test/readable.text.txt');
});

tap.test('should create writable stream', async () => {
  writableStream = streamfs.createWriteStream('./test/writable.text.txt');
  readableStream.pipe(writableStream);
});

tap.start();
