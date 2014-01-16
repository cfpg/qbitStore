var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var schemaCategory = new Schema({
	name: String,
	items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
});

var Category = mongoose.model('Category', schemaCategory);

module.exports = Category;