import { toBoolean, toFloat, toString } from "./conversions";
import { invalidTypeError } from "./error-handling";
import { GetEnvReturnType } from "./types";

/**
 * Gets the raw value of given `env` variable, falling back to `fallback` if
 * provided.
 *
 * @param env       The environment variable key to look up.
 * @param fallback  Optional value to return if no other value is found.
 * @throws          Throws a `ReferenceError` if no environment variable is
 *                  found and no fallback is provided.
 * @returns         Returns the value of environment variable.
 */
export function getEnvRaw(env: string, fallback?: any) {
	const ret = process.env[env] || fallback;

	// Ensure variable is defined.
	if (ret === undefined) {
		throw new ReferenceError(`Environment variable "${env}" is not defined.`);
	}

	return ret;
}

export function getEnvBoolean(env: string, fallback?: boolean): boolean {
	const envVar = toBoolean(getEnvRaw(env, fallback));

	if (typeof envVar !== "boolean") throw invalidTypeError(env, "boolean");

	return envVar;
}

export function getEnvFloat(env: string, fallback?: number): number {
	const envVar = toFloat(getEnvRaw(env, fallback));

	if (typeof envVar !== "number") throw invalidTypeError(env, "float");

	return envVar;
}

export function getEnvInteger(env: string, fallback?: number): number {
	let envVar: number;

	try {
		envVar = getEnvFloat(env, fallback);

		if (!Number.isInteger(envVar)) throw new Error();
	} catch {
		throw invalidTypeError(env, "integer");
	}

	return envVar;
}

export function getEnvString(env: string, fallback?: string): string {
	const envVar = toString(getEnvRaw(env, fallback));

	if (typeof envVar !== "string") throw invalidTypeError(env, "string");

	return envVar;
}

/**
 * Returns the string value found or value of `fallback`.
 *
 * @param env      The environment variable to look for.
 * @param fallback The fallback value to use if not found.
 * @throws         Throws an `Error` if fallback is set to an unsupported type.
 * @throws         Throws an `Error` if conversion function for expected to is
 *                 not found.
 * @throws         Throws an `TypeError` if `env` is not of expected type.
 * @throws         Throws an `ReferenceError` if env var is not defined and no
 *                 `fallback` value was provided.
 * @returns        Returns the value of the `env` variable or `fallback`.
 */
export function getEnv<T extends GetEnvReturnType = string>(env: string, fallback?: T): T {
	// Get type from fallback if defined.
	if (fallback !== undefined) {
		const fallbackType = typeof fallback;

		// Get expected return type from fallback value.
		switch (fallbackType) {
			case "boolean": return getEnvBoolean(env, fallback as boolean) as T;
			case "number":
				if (!Number.isInteger(fallback as number))
					return getEnvFloat(env, fallback as number) as T;
				else
					return getEnvInteger(env, fallback as number) as T;
			// Break to get to default behavior.
			case "string":  break;

			// Throw error if fallback is of unsupported type.
			default:
				throw new Error(`Conversion type "${fallbackType}" is not supported for conversion of environment variables.`);
		}
	}

	return getEnvString(env, fallback as string) as T;
}
