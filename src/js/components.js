import $ from 'jquery';

function components( ){
  alert('It works');
  $('#test-button').click(function(){
    console.log('It works!');
  });
}

module.exports = components;