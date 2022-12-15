import { describe, expect, it } from 'vitest';
import { matcher } from '../src/index';

const { match, test } = matcher;

const testItems = [
  ['/home', ''],
  ['/*', '/'],
  ['a/b/c', 'a/b/c'],
  ['z/b/c', 'a/x/a'],
  ['/*/', 'ab/cd/ef'],
];

describe('matcher', () => {
  it('exports correctly', () => {
    testItems.forEach(([pattern, route]) => {
      expect(match(pattern, route)).toEqual(test(pattern, route));
    });
  });
});
