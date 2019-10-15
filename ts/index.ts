import * as plugins from './streamfs.plugins';

import { ReadStream } from 'fs';
import { WriteStream } from 'fs';
export const createReadStream = (pathArg: string) => {
  return plugins.fs.createReadStream(pathArg);
};

export const createWriteStream = (pathArg: string) => {
  return plugins.fs.createWriteStream(pathArg);
};
