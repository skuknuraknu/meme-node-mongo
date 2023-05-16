const express = require('express');
const router = express.Router();

const login_controller = require('../controllers/login.controller');

router.get('/', login_controller.index);
router.post('/login', login_controller.login);

module.exports = router;