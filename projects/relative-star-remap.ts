/* --- path: ./tsconfig.json --- */
{
    "compilerOptions": {
        "composite": true,
        "paths": {
            "*": ["./lib/*"]
        },
    }
}

/* --- path: ./lib/foo.ts --- */
export const bar = 42;

/* --- path: ./src/index.ts --- */
import { bar } from "foo";
//       ^ defined: 12
