export function invalidTypeError(env: string, type: string) {
	return new TypeError(`Environment variable "${env}" is not of type ${type}.`);
}
