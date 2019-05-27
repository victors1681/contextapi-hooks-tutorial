const path = require("path");

const getResolve = () => ({
  alias: {
    view: path.join(__dirname, "..", "src", "View"),
    container: path.join(__dirname, "..", "src", "Container")
  },
  extensions: [".js"],
  modules: [
    path.resolve(__dirname, "..", "src"),
    path.resolve(__dirname, "..", "node_modules")
  ]
});

module.exports.getResolve = getResolve;
