import getenv from ".";

let origEnvs: any;

beforeAll(() => {
	origEnvs = process.env;
});

beforeEach(() => {
	process.env = {
		FALSE: "false",
		FLOAT: "1.1",
		INT: "1",
		STRING: "foo",
	};
});

afterAll(() => {
	process.env = origEnvs;
});

describe("getenv", () => {
	test("given no fallback, should return the string value of variable", () => {
		expect(getenv("FALSE")).toBe("false");
		expect(getenv("FLOAT")).toBe("1.1");
		expect(getenv("INT")).toBe("1");
		expect(getenv("STRING")).toBe("foo");
	});

	test("given a fallback, should return fallback only if variable not found", () => {
		expect(getenv("UNDEFINED", "fallback")).toBe("fallback");
		expect(getenv("STRING", "fallback")).toBe("foo");
	});

	test("should throw an error if fallback is not a supported type", () => {
		expect(() => getenv("STRING", (() => true) as any)).toThrow(
			/is not supported for conversion/
		);
	});

	test("should throw an error if variable not found", () => {
		expect(() => getenv("UNDEFINED")).toThrow(/is not defined/);
	});

	test("should throw an error if return type is not same as fallback", () => {
		expect(() => getenv("STRING", true)).toThrow(/is not of type boolean/);
		expect(() => getenv("STRING", 1)).toThrow(/is not of type integer/);
		expect(() => getenv("STRING", 1.1)).toThrow(/is not of type float/);
	});
});

describe("getenv.bool", () => {
	test("should return the boolean value of variable", () => {
		expect(getenv.bool("FALSE")).toBe(false);
	});

	test("should throw error if value is not a boolean", () => {
		expect(() => getenv.bool("STRING")).toThrow(/is not of type boolean/);
	});
});

describe("getenv.float", () => {
	test("should return the float value of variable", () => {
		expect(getenv.float("FLOAT")).toBe(1.1);
	});

	test("should throw error if value is not a float", () => {
		expect(() => getenv.float("STRING")).toThrow(/is not of type float/);
	});
});

describe("getenv.int", () => {
	test("should return the integer value of variable", () => {
		expect(getenv.int("INT")).toBe(1);
	});

	test("should throw error if value is not an integer", () => {
		expect(() => getenv.int("STRING")).toThrow(/is not of type int/);
	});
});

describe("getenv.string", () => {
	test("should return the string value any variable", () => {
		expect(getenv.string("STRING")).toBe("foo");
		expect(getenv.string("INT")).toBe("1");
		expect(getenv.string("FALSE")).toBe("false");
		expect(getenv.string("FLOAT")).toBe("1.1");
	});
});
