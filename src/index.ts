import { matchRoute } from './matcher';

export interface GlobUrl {
  match(pattern: string, route: string): boolean
  test(pattern: string, route: string): boolean
}

const matcher: GlobUrl = {
  match: matchRoute,
  test: matchRoute,
};

export { matcher };
