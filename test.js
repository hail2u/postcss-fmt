"use strict";

var assert = require("assert");
var postcss = require("postcss");

var fixture = "/* The CSS Formatter */.foo{color:red;}";
var expected = "/* The CSS Formatter */\n.foo {\n    color: red\n}";

var actual = postcss().use(require("./index")()).process(fixture).css;
assert.strictEqual(actual, expected, "should format.");

console.log("Ok");
