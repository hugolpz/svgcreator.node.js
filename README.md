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

<code>

**3b. Run in terminal** 
    
    $ cd /my/working/dir/
    $ node svgcreator.node.js > out.svg

The `console.log` goes to `stdout` then printed into `out.svg`. Job done!

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.png)

### Passing arguments: from command to JS to SVG
To pass a variable from the terminal to the JS script, you can either :

 - set an environment variable in the shell `var=red`, then run the node script which assign this variable `var myvar = process.env.var ;`
 - provide an argument `--COLOR='green'`, then use Node arguments parser module [`minimist`](https://github.com/substack/minimist/) to parse and assign this variable `var myvar = argv.COLOR;` or `var myvar = argv[2];`

    npm install minimist  # local install

**4a. `svgcreator.node.param.js` file**, check the 2 changes :
    
<code>

**4b. Run in terminal**
    
    $ cd /my/working/dir/
    < command >

![no comment](https://raw.github.com/hugolpz/svgcreator.node.js/master/out.param.png)

### Terminal arguments
For purity, if you need command lines with arguments on the right side of the script, such :

<command>



and complete your node.js file with :

    var jsdom = require('jsdom');
    // Get environment variables and/or arguments
    var color_from_shell_variable = process.env.COLOR;      // <<============== IMPORTANT !!
    var color_from_command_argument = argv.COLOR;           // <<============== IMPORTANT !!
    ...
    .style("fill", color_from_shell_variable )
    .style("stroke", color_from_command_argument);

it does the trick.



### Humans

- Hugo Lopez, [@hugo_lz](http://twitter.com/hugo_lz)

### License

- MIT license, CC-by-sa  -- author citation required.
