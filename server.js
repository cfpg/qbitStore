var express = require('express')
  , app = express()
  , db = require('./config/dbschema')
  , pass = require('./config/pass')
  , passport = require('passport')
  , basic_routes = require('./routes/basic')
  , user_routes = require('./routes/user');
  
// configure Express
app.configure(function() {
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PUT");
		next();
	});
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/app'));
});

// Basic pages
app.get('/api', basic_routes.index);
app.get('/', function(req,res) {
  res.sendfile('app/index.html');
});

// Items pages
app.get('/api/items', basic_routes.item.list);
app.get('/api/items/:id', basic_routes.item.view);
app.post('/api/items', basic_routes.item.add);
app.put('/api/items/:id', basic_routes.item.edit);
app.delete('/api/items', basic_routes.item.delete);

// Categories pages
app.get('/api/categories', basic_routes.category.list);
app.get('/api/categories/:id/:p([0-9]*)?', basic_routes.category.view);
app.post('/api/categories', basic_routes.category.add);
app.put('/api/categories/:id', basic_routes.category.edit);
app.delete('/api/categories/:id', basic_routes.category.delete);

// User pages
app.get('/account', pass.ensureAuthenticated, user_routes.account);
app.get('/login', user_routes.getlogin);
app.post('/login', user_routes.postlogin);
app.get('/admin', pass.ensureAuthenticated, pass.ensureAdmin(), user_routes.admin);
app.get('/logout', user_routes.logout);

app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});

