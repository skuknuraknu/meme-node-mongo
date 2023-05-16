const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VideoSchema = new Schema({
    nama_video: {type: String, required: true, max: 70},
    url_video: {type: String, required: true},
    durasi_video: {type: String, required: true},
    desc_video: {type: String, required: true},
    // likes_video: {type: String, required: true},
    // views_video: {type: String, required: true},
    is_private: {type: String, required: true}
    }, { timestamps: true });

module.exports = mongoose.model('Video', VideoSchema);