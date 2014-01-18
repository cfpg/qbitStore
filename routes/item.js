var ItemModel = require('../models/itemModel');

exports.view = function(req, res) {
	// Return item, find by id
	var id = req.params.id;
	
	var item = ItemModel.findById(id, function(err, doc) {
		res.json(doc);
	});
}

exports.add = function(req, res) {
	// Add item to db
	var item = req.body.item;
	item.added = Date.now();
	
	ItemModel.save(item, function(err, item) {
		if (err) {
			res.json(err);
		} else {
			res.json(item);
		}
	});
}

exports.edit = function(req, res) {
	var item = req.body.item;
	var id = item._id;
	delete item._id;
	
	ItemModel.update({_id: item._id}, {"$set": item}, function(err, doc) {
		if (err) {
			res.json(err);
		} else {
			res.json(doc);
		}
	});
}

exports.delete = function(req, res) {
	ItemModel.remove(function(err, item) {
		if (err) {
			res.json(err);
		} else {
			res.json(item);
		}
	});
}