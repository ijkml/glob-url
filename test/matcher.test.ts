import { describe, expect, it } from 'vitest';
import { matchRoute } from '../src/matcher';

describe('matchRoute', () => {
  it('returns false for invalid args', () => {
    expect(matchRoute('', '')).toEqual(false);
    expect(matchRoute('', '/home')).toEqual(false);
    expect(matchRoute('/home', '')).toEqual(false);
  });
  it('should always return true for `*`', () => {
    expect(matchRoute('/*', '/')).toEqual(true);
    expect(matchRoute('*', '/zoe')).toEqual(true);
    expect(matchRoute('*/', 'xyz')).toEqual(true);
    expect(matchRoute('/*/', 'ab/cd/ef')).toEqual(true);
  });
  it('correctly tests route against pattern', () => {
    expect(matchRoute('a/b/c', 'a/b/c')).toEqual(true);
    expect(matchRoute('*/a/c', 'z/a/c')).toEqual(true);
    expect(matchRoute('a/*/c', 'a/z/c')).toEqual(true);
    expect(matchRoute('a/b/*', 'a/b/z')).toEqual(true);
    expect(matchRoute('a/b/*', 'a/b/c/d')).toEqual(true);
    expect(matchRoute('a/b/c', 'a/b/c/d')).toEqual(false);
    expect(matchRoute('z/b/c', 'a/x/a')).toEqual(false);
    expect(matchRoute('z/a/*', 'z/a')).toEqual(false);
  });
});
