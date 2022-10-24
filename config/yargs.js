const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Is the base to multiply",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Is a option to list",
  })
  .option("t", {
    alias: "to",
    type: "number",
    default: 10,
    describe: "Límit to multiply",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "The base must be a number";
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.t)) {
      throw "The limit must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
