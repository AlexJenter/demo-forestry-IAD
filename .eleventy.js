const yaml = require("js-yaml");
const CleanCSS = require("clean-css");

module.exports = (config) => {
  config.addDataExtension("yaml", (contents) => yaml.safeLoad(contents));
  config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
  config.addCollection("pagesSorted", function (collectionApi) {
    return collectionApi.getAll().sort(function (a, b) {
      return b.sort_weight - a.sort_weight;
    });
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
