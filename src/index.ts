import { matchRoute } from './matcher';

export interface MiniMatch {
  match(pattern: string, route: string): boolean
  test(pattern: string, route: string): boolean
}

const matcher: MiniMatch = {
  match: matchRoute,
  test: matchRoute,
};

export { matcher };
