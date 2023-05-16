const Video = require('../models/Video');
const Login = require('../models/Login');
const Menu = require('../models/Menu');
const moment = require('moment');

exports.index = async function (req, res) {
    return res.render("../views/auth/login")
};
exports.login = async function (req, res) {
    let menu = await Menu.find()
    let videos = await Video.find({is_private:"public"})
    let is_auth = await Login.find({email:req.body.email, password:req.body.password})
    if(is_auth.length !== 0){
        let user = { email:is_auth.email, pass:is_auth.pass}
        return res.render("../views/video/index", {is_auth, videos, moment, menu})
    }else{
         return res.render("../views/auth/not_found")
    }
};