var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var schemaCart = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
});
var CartModel = mongoose.model('Cart', schemaCart);

module.exports = CartModel;