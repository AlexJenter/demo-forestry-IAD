const yaml = require("js-yaml");
const CleanCSS = require("clean-css");

module.exports = (config) => {
  config.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));
  config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
