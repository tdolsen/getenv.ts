import { GetEnvInterface } from "./types";
import {
	getEnv,
	getEnvBoolean,
	getEnvFloat,
	getEnvInteger,
	getEnvString,
} from "./getenv";

// Remap to exported name.
const getenv = getEnv as GetEnvInterface;

// Define typecast functions.
getenv.bool = getEnvBoolean;
getenv.float = getEnvFloat;
getenv.int = getEnvInteger;
getenv.string = getEnvString;

// Export default.
export default getenv;
