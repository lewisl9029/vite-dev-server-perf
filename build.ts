import { genCode } from "./codegen.js";
const [width, depth] = process.argv.slice(2);
genCode(Number(width), Number(depth));
