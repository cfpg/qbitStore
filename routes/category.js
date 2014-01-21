var ItemModel = require('../models/itemModel');
var CategoryModel = require('../models/categoryModel');
var mongoose = require('mongoose');

exports.list = function(req, res) {
	// List categories
	var categories = CategoryModel.find();
	categories.populate("items");
	categories.exec(function(err, cats) {
		if (err) {
			res.json(err);
		} else {
			cats.sort('-name');
		
			res.json(cats);
		}
	});
}

exports.view = function(req, res) {
	// Show last 10 items by category id
	var id = req.params.id;
	
	var items = ItemModel.find({category: mongoose.Types.ObjectId(id)});
	items.populate('category');
	items.exec(function(err, docs) {
		if (err) {
			// Error
			res.json(err);
		} else {
			
			items.limit(10);
			items.sort('added');
			items.exec(function(err, items) {
				if (err) {
					res.json(err);
				} else {
					res.json(items);
				}
			});
			
		}
	});
}

exports.add = function(req, res) {
	// List all items in category
}

exports.edit = function(req, res) {
	// Edit a category
}

exports.delete = function(req,res) {
	// Delete a category from the database
}