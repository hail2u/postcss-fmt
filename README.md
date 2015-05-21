postcss-fmt
===========

Format CSS file.


SYNOPSIS
--------

A CSS file may be written with inconsistent format:

    .foo {
      color: red;
    }
    
    .bar{color:green}
    
    .baz         {
    
    
          	color:
        blue
                  	}

This PostCSS plugin formats a CSS file with PostCSS internal default format:

    .foo {
        color: red
    }
    .bar {
        color: green
    }
    .baz {
        color: blue
    }


INSTALL
-------

    $ npm install hail2u/postcss-fmt


USAGE
-----

    var fs = require("fs");
    var postcss = require("postcss");
    
    var original = fs.readFileSync("input.css", "utf8");
    var formatted = postcss([
      require("postcss-fmt")
    ]).process(input).css;
    console.log(formatted);


### As CLI program

Pass CSS file to `cssfmt`:

    $ node ./node_modules/.bin/cssfmt input.css

Or read CSS file from STDIN:

    $ cat input.css | node ./node_modules/.bin/cssfmt -


LICENSE
-------

MIT: http://hail2u.mit-license.org/2015
