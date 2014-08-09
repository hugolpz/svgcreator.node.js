var jsdom = require('jsdom');
jsdom.env(
  // CREATE DOM HOOK:
  "<html><body></body></html>",

  // JS DEPENDENCIES
  [  './js/d3.v3.min.js' //, 'http://d3js.org/d3.v3.min.js'
   ],
// (D3JS) CODE * * * * * * * * * * * * * * * * * * * * * * * *
  function (err, window) {
    var svg = window.d3.select("body")
        .append("svg")
        .attr("width", 100).attr("height", 100);

    svg.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 80)
        .attr("height", 80)
        .style("fill", "purple");
    // END svg design
  //PRINTING SELECTION:
    console.log(window.d3.select("body").html());
}
// END (D3JS) * * * * * * * * * * * * * * * * * * * * * * * *
);