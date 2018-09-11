import getenv from ".";

let origEnvs: any;

beforeAll(() => {
	origEnvs = process.env;
});

beforeEach(() => {
	process.env = {
		STRING: "string",
		FALSE: "false",
		FLOAT: "1.1",
	};
});

afterAll(() => {
	process.env = origEnvs;
});

describe("getenv", () => {
	test("given no fallback, should return the string value of variable", () => {
		expect(getenv("STRING")).toBe("string");
		expect(getenv("FALSE")).toBe("false");
		expect(getenv("NUMBER")).toBe("1");
	});

	test("given a fallback, should return fallback only if variable not found", () => {
		expect(getenv("UNDEFINED", "fallback")).toBe("fallback");
		expect(getenv("FOO", "fallback")).toBe("bar");
	});

	test("should throw an error if fallback is not a supported type", () => {
		expect(() => {
			getenv("FOO", (() => true) as any);
		}).toThrow(/is not supported for conversion/);
	});

	test("should throw an error if variable not found", () => {
		expect(() => {
			getenv("UNDEFINED");
		}).toThrow(/is not defined/);
	});

	test("should throw an error if return type is not same as fallback", () => {
		expect(() => {
			getenv("FOO", 1);
		}).toThrow(/is not of type/);
	});
});

describe("getenv.bool", () => {
	test("should return the boolean value of variable", () => {
		expect(getenv.bool("FALSE")).toBe(false);
	});

	test("should throw error if value is not boolean", () => {
		expect(() => {
			getenv.bool("STRING");
		}).toThrow(/is not of type "boolean"/);
	});
});

describe("getenv.float", () => {
	test("should return the float value of variable", () => {
		expect(getenv.float("FLOAT")).toBe(1);
	});

	test("should throw error if value is not float", () => {
		expect(() => {
			getenv.float("STRING");
		}).toThrow(/is not of type "string/);
	});
});

describe("getenv.integer", () => {
	// TODO
})

describe("getenv.string", () => {
	test("should return the string value of variable", () => {
		expect(getenv.string("STRING")).toBe("string");
	});
});
