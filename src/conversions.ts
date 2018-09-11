export function toBoolean(value?: any) {
	return typeof value === "boolean"
	? value
	: value === "true"
	? true
	: value === "false"
	? false
	: undefined
	;
}

export function toFloat(value?: any) {
	const ret = typeof value === "number"
	? value
	: parseFloat(value as string)
	;

	if (isNaN(ret)) return undefined;

	return ret;
}

export function toString(value?: any) {
	return typeof value === "string"
	? value
	: undefined
	;
}
