var ItemModel = require('../models/itemModel');

/**
 *	Main routes
 */
exports.index = function(req, res) {
	// Return 10 last items
	var items = ItemModel.find();
	items.populate('category');
	items.limit(10);
	items.sort('-added');
	items.exec(function(err, docs) {
		res.json(docs);
	});
};


/**
 *	Item routes
 */
exports.item = require('./item');


/**
 *	Category routes
 */
exports.category = require('./category');