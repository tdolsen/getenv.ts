# getenv.ts

> Helper to get, validate, cast and provide type safety for environment
> variables with TypeScript.

## Installation

```sh
yarn add getenv.ts
# or
npm install getenv.ts
```

## Usage

Set environment variables in a suitable file, and load them in using a library
like [dotenv]/[dotenv-safe], or similar strategy:

```sh
export HTTP_HOST="localhost"
export HTTP_PORT=8080
export HTTP_SECURE=true
export AB_TEST_RATIO=0.5
```

Alternatively, pass the variables along with the execution command:

```sh
HTTP_HOST="localhost" HTTP_PORT=8080 node main.ts
```

Basically, all variables you intend to use must be loaded into `process.env` in
order to be available for getting.

Then you just have to import the package and use the variables:

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

[dotenv]: https://www.npmjs.com/package/dotenv
[dotenv-safe]: https://www.npmjs.com/package/dotenv-safe
[getenv]: https://github.com/ctavan/node-getenv
