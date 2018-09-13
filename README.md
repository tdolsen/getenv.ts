# getenv.ts

> Helper to get and typecast environment variables with TypeScript.

## :warning: Alpha

This library is still in alpha stages and is subject to change. The intention is
to get the API up to par with [getenv], but a lot is lacking and bugs are
probable.

### To do:

* [ ] `.boolish`
* [ ] `.array`
* [ ] `.multi`
* [ ] `.url`
* [ ] `.(enable/disable)Fallbacks`
* [ ] `.(enable/disable)Errors`
* [ ] Full devops
* [ ] Full test coverage
* [ ] Full documentation
* [ ] [vue-cli] compatability

## Installation

> yarn add getenv.ts

> npm install getenv.ts

## Usage

Set environment variables:

```sh
export HTTP_HOST="localhost"
export HTTP_PORT=8080
export HTTP_SECURE=true
export AB_TEST_RATIO=0.5
```

Get and use them:

```ts
import getenv from "getenv.ts";

const host = getenv("HTTP_HOST"); // Same as `getenv.string("HTTP_HOST");`
const port = getenv.int("HTTP_PORT");
const secure = getenv.bool("HTTP_SECURE");
const abTestRatio = getenv.float("AB_TEST_RATIO");
```

[getenv]: https://github.com/ctavan/node-getenv
[vue-cli]: https://github.com/vuejs/vue-cli
