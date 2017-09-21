const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const RoomSchema   = new Schema({
	name: String
});

RoomSchema.index({name: 1}, {unique: true}); // prevent duplicate entries with index

module.exports = mongoose.model('Room', RoomSchema);
