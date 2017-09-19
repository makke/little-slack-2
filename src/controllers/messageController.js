var Message = require('../models/message');

// Display list of all Messages
exports.message_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Message list');
};

// Display detail page for a specific Message
exports.message_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Message detail: ' + req.params.id);
};

// Display Message create form on GET
exports.message_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Message create GET');
};

// Handle Message create on POST
exports.message_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Message create POST');
};

// Display Message delete form on GET
exports.message_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Message delete GET');
};

// Handle Message delete on POST
exports.message_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Message delete POST');
};

// Display Message update form on GET
exports.message_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Message update GET');
};

// Handle message update on POST
exports.message_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Message update POST');
};
