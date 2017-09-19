/// <reference types="node" />
import { ReadStream } from 'fs';
import { WriteStream } from 'fs';
export declare let createReadStream: (pathArg: string) => ReadStream;
export declare let createWriteStream: (pathArg: string) => WriteStream;
