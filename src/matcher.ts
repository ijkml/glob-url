import { isValidString, matchPattern, normalizePath } from './utils';

function matchRoute(globPattern: string, routePath: string): boolean {
  if (!(isValidString(globPattern) && isValidString(routePath)))
    return false;

  const pattern = normalizePath(globPattern)
    .toLocaleLowerCase()
    .split('/')
    .slice(1);

  const route = normalizePath(routePath)
    .toLocaleLowerCase()
    .split('/')
    .slice(1);

  // pattern length
  const pLen = pattern.length;

  // check if pattern ends in a wildcard
  const hasWild = pattern[pLen - 1] === '*';

  // detects if pattern is super wildcard `/*`
  // `/*` should match everything, so...
  if (pLen === 1 && hasWild)
    return true;

  // last part of pattern is not a wildcard
  // && they don't have same length; therefore they cannot match
  // eg: `*/once` vs `*/once/again`  || `ab/*/cd` vs `ab/cd`
  if (!hasWild && pLen !== route.length)
    return false;

  // last part of pattern is a wildcard,
  // if route.len is less than pattern.len
  // then they cannot match
  if (hasWild && pLen > route.length)
    return false;

  // useful part of the route, now route and pattern have same length
  const routeChunk = route.slice(0, pLen);

  let result = false;

  for (let k = 0; k < pLen; k++) {
    result = matchPattern(pattern[k], routeChunk[k]);
    if (!result)
      break;
  }

  return result;
}

export { matchRoute };
