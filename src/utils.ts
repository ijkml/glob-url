function isValidString(str: any) {
  return typeof str === 'string' && str.trim() !== '';
}

function normalizePath(str: string): string {
  const path = str.trim();
  const fixStart = path.startsWith('/') ? path : `/${path}`;

  // '/'
  if (fixStart.length === 1)
    return fixStart;

  return fixStart.endsWith('/')
    ? fixStart.slice(0, fixStart.length - 1)
    : fixStart;
}

function matchPattern(pattern: string, blob: string): boolean {
  return pattern === '*' ? true : pattern === blob;
}

export { isValidString, normalizePath, matchPattern };
