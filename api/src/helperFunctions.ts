import * as crypto from 'crypto';
import isURL from 'validator/lib/isURL';

export function generateHash(longUrl: string): string {
  const hash = crypto.createHash('shake256', {outputLength: 4}).update(longUrl).digest('hex');
  return hash;
};

export function generateShortUrl(hash: string): string {
  const shortUrl = `http://localhost:3000/${hash}`
  return shortUrl;
};

export function validateUrl(longUrl: string): boolean {
  if (isURL(longUrl)) return true;
  return false;
}