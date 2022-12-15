import { describe, expect, it } from 'vitest';
import { matchPattern, normalizePath } from '../src/utils';

describe('normalizePath', () => {
  it('removes trailing slash', () => {
    expect(normalizePath('/path/to/home/')).toEqual('/path/to/home');
  });
  it('adds leading slash', () => {
    expect(normalizePath('path/to/home')).toEqual('/path/to/home');
  });
  it('adds/removes leading/trailing', () => {
    expect(normalizePath('path/to/home/')).toEqual('/path/to/home');
  });
  it('returns `/` for empty strings', () => {
    expect(normalizePath('')).toEqual('/');
  });
});

describe('matchPattern', () => {
  it('should always match `*`', () => {
    expect(matchPattern('*', '')).toEqual(true);
    expect(matchPattern('*', 'any')).toEqual(true);
    expect(matchPattern('*', ' ')).toEqual(true);
  });
  it('should deeply match text', () => {
    expect(matchPattern('any', 'any')).toEqual(true);
    expect(matchPattern('key', 'any')).toEqual(false);
    expect(matchPattern('any', 'key')).toEqual(false);
    expect(matchPattern('d', 'z')).toEqual(false);
  });
});
