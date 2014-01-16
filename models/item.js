var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var schemaItem = new Schema({
	name: String,
	category: {type: Schema.Types.ObjectId, ref: 'Category'},
	description: String,
	cost: Number,
	added: {type: Date, default: Date.now}
});

var Item = mongoose.model('Item', schemaItem);

module.exports = Item;