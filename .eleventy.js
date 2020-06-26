const yaml = require("js-yaml");
const CleanCSS = require("clean-css");

module.exports = (config) => {
  config.addDataExtension("yml", (contents) => yaml.safeLoad(contents));

  config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);

  config.addCollection("pageSorted", function (collectionApi) {
    return collectionApi.getFilteredByTag("page").sort(function (a, b) {
      return a.data.sort_order - b.data.sort_order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
