// import { createHash } from 'node:crypto';
import * as crypto from 'crypto';
import isUrl from 'is-url';

export function generateHash(longUrl: string): string {
  const hash = crypto.createHash('shake256', {outputLength: 4}).update(longUrl).digest('hex');
  return hash;
};

export function generateShortUrl(hash: string): string {
  const shortUrl = `http://localhost:3001/${hash}`
  return shortUrl;
};

export function validateUrl(longUrl: string): boolean {
  if (isUrl(longUrl)) return true;
  return false;
}