window.jQuery = require('jquery'); //delete this line if you don't need jquery
var bootstrap = require('bootstrap/dist/js/bootstrap')
var $ = require('jquery');
var d3 = require('d3'); //delete this line if you don't need d3
$('#jquery-test').css("color", "red");
/* delete lines 5 and 6 */
var components = require('./components.js'); //delete this line
components();

/* if your page turns light blue, d3 is working */
d3.select("body").style("background-color", "lightblue");

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h2>React and ES6 working</h2>,
  document.getElementById('app')
);


