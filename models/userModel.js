var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var schemaUser = new Schema({
	name: String,
	email: String,
	password: String,
	cart: {type: Schema.Types.ObjectId, ref: 'Cart'}
});

var UserModel = mongoose.model('User', schemaUser);

module.exports = UserModel;