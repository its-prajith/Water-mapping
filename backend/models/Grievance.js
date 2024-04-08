const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
    name: String,
    location: String,
    comments: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('Grievance', grievanceSchema);
