const yaml = require("js-yaml");

module.exports = (config) => {
  config.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
  };
};
