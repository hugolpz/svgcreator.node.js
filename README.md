## svgcreator.node.js
**svgcreator.node.js** is a minimal `D3js` + `NodeJS` demo on how to automatize the generation of SVG files. You need a working `D3js` script, `NodeJS` on your PC, to `git clone` this repository, plus some basic terminal & JS coding skills.

### Concept
[D3js](http://d3js.org/d3.v3.min.js) is a powerful data visualization framework which can be run by various JS engines. Web-browsers and other contexts use JS engines to run various JS codes. [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)), by example, is a JS engine used by Chrome browser and other systems. 

### Approach
For scriptic SVG generation via D3js, you have to: 
1. Use the console to run a JS engine.
2. Create a DOM hook on which D3js could hook
3. Select the relevant part, and print it into a *.svg file
Then nothing is stopping you :)

### Context

**1. Install NodeJS ([1](http://howtonode.org/how-to-install-nodejs))**

    curl http://npmjs.org/install.sh | sh       #this should work (not tested), may need sudo.

**2. Install jsdom ([2](https://github.com/tmpvar/jsdom#install))**
Using the Node Packages Manager, as global or local:


    $sudo npm install -g jsdom     # -g for global installation
    $npm install jsdom             # local install

You also need [D3js](http://d3js.org/d3.v3.min.js).

### Node.js + jsdom + D3js = SVG

**3a. Create a `svgcreator.node.js` file, then insert your D3js code in it** :

    var jsdom = require('jsdom');
    jsdom.env(
      "<html><body></body></html>",        // CREATE DOM HOOK
      [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
      'js/d3.v3.min.js' ],                 // ... & offline

    // D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
      function (err, window) {
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
        // END svg design

      //PRINTING OUT SELECTION
        console.log(window.d3.select("body").html());
     }
    // END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *

    );

**3b. Run in terminal** 
    
    $cd /my/working/dir/
    $node svgcreator.node.js > out.svg

The `console.log` goes to `stdout` then printed into `out.svg`. Job done!

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.png)

### Passing arguments: from command to JS to SVG
It is also possible to pass variables from the terminal to the JS and following SVG. Let's say you want to assign the SVG rectangle a variable color's value.

**4a. `svgcreator.node.with_parameters.js` file**, check the 2 changes :
    
    var jsdom = require('jsdom');
    jsdom.env(
      "<html><body></body></html>",        // CREATE DOM HOOK:
      [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
      'js/d3.v3.min.js' ],                 // ... & offline
    // D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
      function (err, window) {
    
        var color = process.env.COLOR;     // <<############### IMPORTANT !!
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
            .style("fill", color);         // <<############### IMPORTANT !!
        // END svg design
    
      //PRINTING OUT SELECTION
        console.log(window.d3.select("body").html());
     }
    // END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *
    );

**4b. Run in terminal**
    
    $cd /my/working/dir/
    $COLOR=#66AAFF node svgcreator.node.js > out.svg   #passing var COLOR

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.VAR_COLOR.png)

### Terminal arguments
For purity, if you need command lines with arguments on the right side of the script, such :

   node svgcreator.node.js --COLOR=#66AAFF > out.svg

You then **must** include [`minimist`](https://github.com/substack/minimist/), an arguments parser :

    npm install minimist  # local install

and complete your node.js file with :

    var jsdom = require('jsdom');
    var argv = require('minimist')(process.argv.slice(2));  // <<############### IMPORTANT !!
    ...
    var color = argv.COLOR;        // <<############### IMPORTANT !!
    ...
    .style("fill", color);         // <<############### IMPORTANT !!

it does the trick.



### Humans

- Hugo Lopez, [@hugo_lz](http://twitter.com/hugo_lz)

### License

- MIT license, CC-by-sa  -- author citation required.