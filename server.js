'use strict';

var express = require('express');
var port = 8080;
var path = require('path');
var app = express();
app.use('/node_modules/bootstrap', express.static(process.cwd() + '/node_modules/bootstrap'));
app.use('/dist', express.static(process.cwd() + '/dist'));
/**
app.get('/', function (req, res, next) {
  var options = {
    root: __dirname + '/dist/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile('index.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('File Sent');
    }
  });

});
**/
app.use('/dist', express.static(process.cwd() + '/dist'));
app.set('views', path.join(__dirname, 'src/pug'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index.pug', {selected: 'home'})
})


app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});

/** for dev only , delete script from index.html as well **/
var livereload = require('livereload');
var server = livereload.createServer();
server.watch([__dirname + "/dist", __dirname + "/src/pug", __dirname + "/src/scss"]);
