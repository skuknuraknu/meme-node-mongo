const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MenuSchema = new Schema({
    nama_menu: {type: String},
    class_menu: {type: String},
    parent_menu: {type: String},
    nested_menu: {type: String},
    url_menu: {type: String},
    }, { timestamps: true });

module.exports = mongoose.model('Menu', MenuSchema);