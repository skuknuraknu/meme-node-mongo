const Video = require('../models/Video');
const Login = require('../models/Login');
const Menu = require('../models/Menu');
const moment = require('moment');

exports.index = async function (req, res) {
    let videos = await Video.find({is_private:"public"})
    let menu = await Menu.find()
    let is_auth = await Login.find({email:"admin@gmail.com", password:"123"})
    return res.render("../views/video/index", {videos, moment, is_auth, menu})
};
exports.tambah = async function (req, res) {
    let menu = await Menu.find()
    let is_auth = await Login.find({email:"admin@gmail.com", password:"123"})
    return res.render("../views/video/tambah", {menu, is_auth})
};
exports.store = function (req, res) {
    let video = new Video({
        nama_video: req.body.nama_video,
        url_video: req.body.url_video,
        durasi_video: req.body.durasi_video,
        desc_video: req.body.deskripsi_video,
        is_private: req.body.status
    });
    video.save().then(data => {
        res.redirect('/video')
    }).catch(err => console.log(err))
};
exports.video_details = async function (req, res) {
    let menu = await Menu.find()
    let is_auth = await Login.find({email:"admin@gmail.com", password:"123"})
    let video = await Video.findById(req.params.id)
    return res.render("../views/video/edit", {video, menu, is_auth})
};
exports.update = function (req, res) {
    Video.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/video')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Video.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/video')).catch(err => console.log(err))
};