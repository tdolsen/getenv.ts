// The supported return types for getenv.
export type GetEnvReturnType = string | boolean | number;

// Signature for getting environment variable cast to type `T`.
export type GetEnvFunction<T extends GetEnvReturnType> = (
	env: string,
	fallback?: T
) => T;

// Signature for conversion functions.
export type GetEnvConversionFunction<T extends GetEnvReturnType> = (
	value?: string
) => T | undefined;

// Interface for module, having main function and type casting functions.
export interface GetEnvInterface {
	// Default function
	<T extends GetEnvReturnType = string>(env: string, fallback?: T): T;

	bool: GetEnvFunction<boolean>;
	float: GetEnvFunction<number>;
	int: GetEnvFunction<number>;
	string: GetEnvFunction<string>;
}
