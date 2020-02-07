require("dotenv").config();

const { APP_PORT: port } = process.env;

module.exports = { port };
