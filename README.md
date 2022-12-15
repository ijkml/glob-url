# Glob Url

<a href="https://www.npmjs.com/package/glob-url"><img alt="npm" src="https://img.shields.io/npm/v/glob-url?color=teal"></a>
<a href="https://github.com/ijkml/glob-url/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/ijkml/glob-url?color=teal"></a>
<img alt="CI" src="http://img.shields.io/github/actions/workflow/status/ijkml/glob-url/ci.yml?branch=main">


**Glob Url** is a dead-basic, dead-simple pattern matcher library for route URLs.

## Installation

With `pnpm`
```bash
pnpm add glob-url
```

...with `npm`
```bash
npm install glob-url
```

...or `yarn`
```bash
yarn add glob-url
```

## Usage

Simply import and match away

```typescript
import { matcher } from 'glob-url';

matcher.match('PATTERN', 'ROUTE');
// or
matcher.test('PATTERN', 'ROUTE');
// both of them do the same thing, choose your poison
```

The functions return `true` if `ROUTE` matches `PATTERN`.

### Pattern Syntax:

- matching is case-insensitive
- `*` matches all characters until the next `/`, except it is at the end of the pattern, then it matches (literally) everything.

#### Examples

- `/user/*` &mdash; will match anything after `user/` including `/user/peter/pets/etc`
- `/user/John` &mdash; will only match `/user/John`
- `/user/*/pets` &mdash; will match `/user/John/pets`, `/user/Ann/pets`
- `/*/dashboard` &mdash; will match `/blue/dashboard`, `/green/dashboard`, etc...

### Route (Path) Syntax:

- Routes may or may not have a leading or trailing slash
- Only forward slash (`/`) is valid. Please.
- Examples:
  - `/while/you-are/here`
  - `/star/the/repo`
  - `/please/`
  - `/`

## Contributions

Contributions to glob-url are welcome! I know I said "dead-simple", but if you have an idea for a new feature or have found a bug, please open an issue or submit a pull request.

## Author

Hi, I'm [ML](https://github.com/ijkml). I'm trying to break into open-source by creating really awesome 10x developer tools (like this one). By using this tool, you're automagically a 10x developer, 20x if you were 10x before. Give it a [star on GitHub](https://github.com/ijkml/glob-url/) to gain another 10x!

## Acknowledgements

- [starter-ts by @antfu](https://github.com/antfu/starter-ts)
- Vite, Vitest, Unbuild

## License

[MIT](./LICENSE) License © 2022 [ML](https://github.com/ijkml)
