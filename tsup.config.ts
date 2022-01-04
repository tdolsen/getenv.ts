import { defineConfig } from "tsup";

export default defineConfig({
	tsconfig: "tsconfig.json",
	entry: ["src/index.ts", "src/**/*.ts", "!src/**/*.spec.ts"],
	outDir: "dist",
	format: ["esm", "cjs"],
	target: "esnext",
	splitting: false,
});
