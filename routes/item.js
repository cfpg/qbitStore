var ItemModel = require('../models/itemModel');
var mongoose = require('mongoose');

exports.list = function(req, res) {
	// Return list of all items
	var items = ItemModel.find();
	items.populate("category");
	items.exec(function(err, items) {
		if (err) {
			res.json(err);
		} else {
			items.sort('-added');
		
			res.json(items);
		}
	});
}

exports.view = function(req, res) {
	// Return item, find by id
	var id = req.params.id;
	
	var item = ItemModel.findById(id)
	.populate('category')
	.exec(function(err, doc) {
		res.json(doc);
	});
}

exports.add = function(req, res) {
	// Add item to db
	var item = req.body.item;
	item.added = Date.now();
	item.category = mongoose.Types.ObjectId(item.category);
	
	ItemModel.create(item, function(err, item) {
		if (err) {
			res.json(err);
		} else {
			// Save to category list also
			var CategoryModel = require('../models/categoryModel');
			var cat = CategoryModel.findById(item.category).exec(function (err, cat) {
				if (err) {
					res.json(err);
				} else {
					cat.items.push(item._id);
					cat.save(function (err, item) {
						if (err) {
							console.log('Saving error: '+err);
						} else {
							console.log('Saving succeed');
						}
					});
				}
			});
			
			// Retrieve category information for response
			item.populate('category');
			res.json(item);
		}
	});
}

exports.edit = function(req, res) {
	var item = req.body.item;
	var id = item._id;
	delete item._id;
	
	ItemModel.update({_id: id}, {"$set": item}, function(err, doc) {
		if (err) {
			res.json(err);
		} else {
			res.json(doc);
		}
	});
}

exports.delete = function(req, res) {
	var item = ItemModel.findOne({_id: req.body.id}, function(err, doc) {
		if (err) {
			res.json(err);
		} else {
			doc.remove(function(err, item) {
				if (err) {
					res.json(err);
				} else {
					res.json(item);
				}
			});
		}
	});
}