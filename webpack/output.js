const path = require("path");
const { isDev } = require("./utils");

const getOutput = env => ({
  path: path.join(__dirname, "..", "dist", "ui"),
  filename: isDev(env) ? "app.js" : "js/[name]".concat(".[chunkhash:8].js")
});

module.exports.getOutput = getOutput;
