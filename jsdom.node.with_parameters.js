// Run me with: 
// $ COLOR=#66AAFF, node jsdom.node.js > out.svg   #passing var COLOR
//
var jsdom = require('jsdom');
jsdom.env(
  "<html><body></body></html>",        // CREATE DOM HOOK:
  [ 'http://d3js.org/d3.v3.min.js',    // JS DEPENDENCIES online ...
  'js/d3.v3.min.js' ],                 // ... & offline
// D3JS CODE * * * * * * * * * * * * * * * * * * * * * * * *
  function (err, window) {

    var color = process.env.COLOR;     // <<============== IMPOTANT !!
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
        .style("fill", color);         // <<============== IMPOTANT !!
    // END svg design

  //PRINTING OUT SELECTION
    console.log(window.d3.select("body").html());
 }
// END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *
);