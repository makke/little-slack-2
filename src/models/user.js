const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const UserSchema   = new Schema({
	name: String
});

UserSchema.index({name: 1}, {unique: true}); // prevent duplicate entries with index

module.exports = mongoose.model('User', UserSchema);
