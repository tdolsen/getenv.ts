module.exports = {
	coverageDirectory: "coverage",
	globals: {
		"ts-jest": {
			"tsConfigFile": "tsconfig.json"
		}
	},
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js"
	],
	testEnvironment: "node",
	testRegex: "\\.spec\\.ts$",
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
};
