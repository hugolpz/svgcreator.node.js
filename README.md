## svgcreator.node.js
**svgcreator.node.js** is a minimal `D3js` + `NodeJS` demo to automatize the generation of SVG files. You need a working `D3js` script, `NodeJS` on your PC, to `git clone` this repository, plus some basic terminal & JS coding skills.

### Concept
[D3js](http://d3js.org/d3.v3.min.js) is a powerful data visualization framework which can be run by various JS engines. Web-browsers and other contexts use JS engines to run various JS codes. [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)), by example, is a JS engine used by Chrome browser and other systems. 

### Approach
For scriptic SVG generation via D3js, we will: 
1. Use the terminal to run the JS engine V8.
2. Use JSdom to create an HTML `<body>` DOM element on which D3js could hook
3. Select appended svg, and print it into a *.svg file
Then nothing is stopping you :)

### Context

**1. Install NodeJS ([1](http://howtonode.org/how-to-install-nodejs))**

    curl http://npmjs.org/install.sh | sh       #this should work (not tested), may need sudo.

**2. Install jsdom ([2](https://github.com/tmpvar/jsdom#install))**
Using the Node Packages Manager, as global or local:

    $sudo npm install -g jsdom     # -g for global installation, or
    $npm install jsdom             # local install

You also need [D3js](http://d3js.org/d3.v3.min.js).

### Node.js + jsdom + D3js = SVG

**3a. Create a `svgcreator.node.js` file, then insert your D3js code in it** such :

    var jsdom = require('jsdom');
    jsdom.env(
      "<html><body></body></html>",        // CREATE DOM HOOK
      [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
      'js/d3.v3.min.js' ],                 // ... & offline
    
      function (err, window) {
    
    // D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
        var svg = window.d3.select("body")
            .append("svg")
            .attr("width", 100)
            .attr("height", 100);
    
        svg.append("rect")
            .attr("id", "rect1")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 80)
            .attr("height", 80)
            .style("fill", "green");
    // END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *
    
      //PRINTING OUT SELECTION
        console.log( window.d3.select("body").html() );
     } // end function
    );

**3b. Run in terminal** 
    
    $ cd /my/working/dir/
    $ node svgcreator.node.js > out.svg

The `console.log` goes to `stdout` then printed into `out.svg`. Job done!

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.png)

### Using local variable : from JS to SVG

To allow more flexible filenaming by reusing **local variables**, it's better to print your file using the node module `fs`:

    var fs = require('fs');
    ...
    fs.writeFileSync('out.param.svg', window.d3.select("body").html());

### Passing arguments: from command to JS to SVG
To pass a variable from the terminal to the JS script, you can either :

 - set an environment variable in the shell `var=red`, then run the node script which assign this variable `var myvar = process.env.var ;`
 - provide an argument `--COLOR='green'`, then use Node arguments parser module [`minimist`](https://github.com/substack/minimist/) to parse and assign this variable `var myvar = argv.COLOR;` or `var myvar = argv[2];`

    npm install minimist  # local install

**5a. `svgcreator.node.param.js` file**, check [the code](https://raw.github.com/hugolpz/svgcreator.node.js/master/svgcreator.node.param.js) and changes :
    
    var jsdom = require('minimist');       // If you wish to use command's arguments, add this line. Else, you can use environment variables.
    // Get environment variables and/or arguments
    var color_sh = process.env.COLOR;      // <<============== IMPORTANT !!
    var color_arg = argv.COLOR;            // <<============== IMPORTANT !!
    ...
    .style("fill", color_sh )
    .style("stroke", color_arg);

**5b. Run in terminal**
    
    $ cd /my/working/dir/
    $ COLOR='orange' node svgcreator.node.param.js --COLOR=#99BBFF

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.param.png)

### Humans

- Hugo Lopez, [@hugo_lz](http://twitter.com/hugo_lz)

### License

- MIT license, CC-by-sa  -- author citation required.
