// Run me with: 
// $ COLOR=#66AAFF, node jsdom.node.js COLOR2='red' > out2.svg   #passing var COLOR
//
var jsdom = require('jsdom');
var argv = require('minimist')(process.argv.slice(2));
var parseArgs = require('minimist');
jsdom.env(
  "<html><body></body></html>",        // CREATE DOM HOOK:
  [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
  'js/d3.v3.min.js' ],                 // ... & offline
// D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
  function (err, window) {

    var color = process.env.COLOR;     // <<============== IMPOTANT !!
    var color2 = argv.COLOR2; // <<============== IMPOTANT !!
    var svg = window.d3.select("body")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);
    svg.append("rect")
        .attr("id", "rect1")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 40)
        .attr("height", 40)
        .style("fill", color);
    svg.append("rect")
        .attr("id", "rect2")
        .attr("x", 50)
        .attr("y", 50)
        .attr("width", 40)
        .attr("height", 40)
        .style("fill", color2);         // <<============== IMPOTANT !!
    // END svg design

  //PRINTING OUT SELECTION
    console.log(window.d3.select("body").html());
 }
// END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *
);