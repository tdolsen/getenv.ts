# getenv.ts

> Helper to get, validate, cast and provide type safety for environment
> variables with TypeScript.

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

// Get values cast to desired type.
const host: string = getenv.string("HTTP_HOST");
const port: number = getenv.int("HTTP_PORT");
const secure: boolean = getenv.bool("HTTP_SECURE");
const abTestRatio: number = getenv.float("AB_TEST_RATIO");

// Use default value if variable isn't defined.
const sudoUser = getenv.string("SUDO_USER", "root");

// Throws `ReferenceError` when variable isn't defined.
try {
  const invalid = getenv.string("DOES_NOT_EXIST");
} catch (error) {
  // Will throw...
}

// Throws `TypeError` when variable isn't of the expected type.
try {
  const invalid = getenv.int("HTTP_HOST");
} catch (error) {
  // Will throw...
}
```

[getenv]: https://github.com/ctavan/node-getenv
