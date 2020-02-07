const fs = require("fs");
const { resolve } = require("path");

module.exports = app => {
  fs.readdirSync(__dirname)
    .filter(f => f.indexOf(".") !== 0 && f !== "index.js")
    .forEach(f => require(resolve(__dirname, f))(app));
};
