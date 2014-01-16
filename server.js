
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

// Define the database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://qbit:qbit13@linus.mongohq.com:10045/qbitStore');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser('qbitStore493hfls#423fb3@23%$^%87%noi234buv2'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// handleError
function handleError(e) {
	return res.send(404, e);
}

// Config
app.set('perpage', 10); // pagination - number of items per page

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});