var mongoose = require('mongoose');

var Adi_schema = new mongoose.Schema({
    name: String,
    features: Boolean,
    password: varchar,
    note: String,
    turn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', Adi_schema);