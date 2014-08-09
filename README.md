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

### Node.js + jsdom + D3js = SVG

**1. Install NodeJS:**
Follow: How to install Node.js (aka NPM)? ([1](http://howtonode.org/how-to-install-nodejs)).

**2. Install jsdom**
Using the Node Packages Manager ([2](https://github.com/tmpvar/jsdom#install)):

    $sudo npm install -g jsdom     # -g for global installation
or

    $npm install jsdom             # local installation

**3. Create a jsdom.node.js file, then insert your D3js code in it** :

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

**4. Run in terminal** 
    
    $cd /my/working/dir/
    $node jsdom.node.js > out.svg

The `console.log` goes to `stdout` then printed into `out.svg`. Job done!

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.png)
![no comment](https://rawgithub.com/hugolpz/svgcreator.node.js/master/out.png)
<img src="https://rawgithub.com/hugolpz/svgcreator.node.js/master/out.svg">
![Alt text](http://hugolpz.github.io//svgcreator.node.js/master/out.svg)
<img src="http://potherca.github.io/StackOverflow/question.13808020.include-an-svg-hosted-on-github-in-markdown/controllers_brief.svg">

### Humans

- Hugo Lopez