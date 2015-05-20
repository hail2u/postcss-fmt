"use strict";

module.exports = require("postcss").plugin("fmt", function () {
  return function (css) {
    return css.clone();
  };
});
