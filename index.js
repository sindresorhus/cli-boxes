import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cliBoxes = require("./boxes.json");

export default cliBoxes;
