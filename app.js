const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");
require("colors");

console.clear();

createFile(argv.b, argv.l, argv.t)
  .then((fileName) => console.log(fileName, " created".green))
  .catch((err) => console.log(err));
