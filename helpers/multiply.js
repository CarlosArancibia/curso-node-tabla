const fs = require("fs");
const colors = require("colors");

let output = "",
  consola = "";

const createFile = async (base = 5, list = false, to = 10) => {
  try {
    for (let i = 1; i <= to; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".red} ${i} ${"=".red} ${base * i}\n`;
    }

    if (list) {
      console.log("=================".green);
      console.log("  Table of: ".green, base);
      console.log("=================".green);
      console.log(consola);
    }

    await fs.writeFileSync(`./output/table-${base}.txt`, output);
    return `table-${base}.txt`;
  } catch (error) {
    throw error;
  }

  // console.log(`The file table-${base}.txt has been saved!`);
};

module.exports = {
  createFile,
};
