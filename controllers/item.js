var mongoose = require('mongoose')
var Item = require('../models/itemModel');

module.exports.controller = function(app) {

/**
 * a home page route
 */
	app.get('/item/new', function(req, res) {
		res.render('item-new');
	});
	
	app.post('/item/new', function(req, res) {
		// Save item to db
		console.log(req.body);
		res.json(req.body);
	});
	
  app.get('/item/:id', function(req, res) {
      // Show Item by _id
			var item = Item.find({"_id": mongoose.ObjectId(req.params.id)}, function(err, item) {
				if (err) return handleError(err);
				res.json(item);
			})
  });

}