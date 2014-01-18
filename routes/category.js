var ItemModel = require('../models/itemModel');
var mongoose = require('mongoose');

exports.view = function(req, res) {
	// Show last 10 items by category id
	var id = req.params.id;
	
	var items = ItemModel.find({category: mongoose.Types.ObjectId(id)}, function(err, docs) {
		if (err) {
			// Error
			res.json(err);
		} else {
			
			items.limit(10);
			items.sort('-added');
			items.exec(function(err, items) {
				if (err) {
					res.json(err);
				} else {
					res.json(items);
				}
			});
			
		}
	})
}