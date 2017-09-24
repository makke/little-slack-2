const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// Define collection and schema for private user to user messages
const PrivmesSchema = new Schema({
 sender: { type: Schema.Types.ObjectId, ref: 'User' }, // is a username
 receiver: { type: Schema.Types.ObjectId, ref: 'User' }, // is a username
 // add Date to get messages in right order ?
 text: String
});

module.exports = mongoose.model('Privmes', PrivmesSchema);
