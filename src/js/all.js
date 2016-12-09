/** bootstrap **/
window.jQuery = require("");
var bootstrap = require("bootstrap/dist/js/bootstrap")

/** jquery **/
var $ = require("jquery");
  $("#test-button").click(function(){
    console.log("jQuery is working!!!");
  });

var test = require("./module");
test();