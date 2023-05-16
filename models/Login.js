const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LoginSchema = new Schema({
    nama: {type: String, required: true, max: 70},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    is_verified: {type: String, required: true},
    }, { timestamps: true });

module.exports = mongoose.model('Login', LoginSchema);