const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// Define collection and schema for messages
const MessageSchema = new Schema({
 author: { type: Schema.Types.ObjectId, ref: 'User' }, // is a username
 text: String
});

module.exports = mongoose.model('Message', MessageSchema);
