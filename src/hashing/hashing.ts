// import { createHash } from 'node:crypto';
import * as crypto from 'crypto';
import isUrl from 'is-url';

import { urlData } from '../interfaces';

export function generateHash(longUrl: string): string {
  const hash = crypto.createHash('sha256').update(longUrl).digest('hex');
  const shortenedHash = hash.slice(0, 10);
  // if checkForCollision === true, rerun hashing function
  // * but rerunning it generates the same hash doesn't it...
  // if checkForCollision === false, continue
  return shortenedHash;
};

export function generateShortUrl(hash: string): string {
  const shortUrl = `http://localhost/${hash}`
  return shortUrl;
};

export function checkForCollision(hash: string): boolean {
  // if collision, return true
  return true;
  // if no collision, return false
  return false;
}

export function validateUrl(longUrl: string): boolean {
  if (isUrl(longUrl)) return true;
  return false;
}

export function findUrl(key: string, data: urlData[]) {
  const url = data.find((el) => {
    return el.key === key;
  })

  return url;
}

