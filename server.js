var express = require('express')
  , app = express()
  , db = require('./config/dbschema')
  , pass = require('./config/pass')
  , passport = require('passport')
  , basic_routes = require('./routes/basic')
  , user_routes = require('./routes/user');
  
// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + 'public'));
});


// Basic pages
app.get('/', basic_routes.index);

app.get('/addnew', function(req, res) {
	res.render('addnew.hjs');
});
app.get('/listitems', function(req, res) {
	var ItemModel = require('./models/itemModel');
	var items = ItemModel.find();
	items.populate('category');
	items.sort('-name');
	items.exec(function (err, items) {
		if (err) {
			res.json(err);
		} else {
			app.locals.items = items;
			res.render('listitems.hjs');
		}
	});
});

app.get('/items', basic_routes.item.list);
app.get('/items/:id', basic_routes.item.view);
app.post('/items', basic_routes.item.add);
app.put('/items/:id', basic_routes.item.edit);
app.delete('/items/:id', basic_routes.item.delete);

// Category pages
app.get('/categories', basic_routes.category.list);
app.get('/categories/:id/:p([0-9]*)?', basic_routes.category.view);
app.post('/categories', basic_routes.category.add);
app.put('/categories/:id', basic_routes.category.edit);
app.delete('/categories/:id', basic_routes.category.delete);

// User pages
app.get('/account', pass.ensureAuthenticated, user_routes.account);
app.get('/login', user_routes.getlogin);
app.post('/login', user_routes.postlogin);
app.get('/admin', pass.ensureAuthenticated, pass.ensureAdmin(), user_routes.admin);
app.get('/logout', user_routes.logout);

app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});

