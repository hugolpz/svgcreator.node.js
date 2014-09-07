// Run me with: 
// $ COLOR='orange' node svgcreator.node.param.js --COLOR=#99BBFF   #passing var COLOR

var jsdom = require('jsdom'); // dom generateur
var fs    = require('fs');    // file creator, using it here allow flexible filenames.
var argv  = require('minimist')(process.argv.slice(2)); // command parser to get arguments

jsdom.env(
  "<html><body></body></html>",        // CREATE DOM HOOK:
  [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
  'js/d3.v3.min.js' ],                 // ... & offline
  function (err, window) {

// Get environment and/or arguments as variables 
    var color_sh  = process.env.COLOR;      // <<============== IMPORTANT !! color from shell's variables
    var color_arg = argv.COLOR;           // <<============== IMPORTANT !! color from command's arguments

// D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
    var svg = window.d3.select("body")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);
    svg.append("rect")
        .attr("id", "rect1")
        .attr("x", 25)
        .attr("y", 25)
        .attr("width", 50)
        .attr("height", 50)
        .style("fill", color_sh )    // <<============== IMPORTANT !!
        .style("stroke", color_arg ) // <<============== IMPORTANT !!
        .style("stroke-width", 10 );      
    // END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *

  //PRINTING OUT SELECTION
    fs.writeFileSync('out.param.svg', window.d3.select("body").html()); // <<======= filename can be customized using shell, arguments, or local variables!

    console.log("SVG printed."); // shell message
 }

);
