const express = require('express');
const router = express.Router();

const video_controller = require('../controllers/video.controller');

router.get('/', video_controller.index);
router.get('/tambah', video_controller.tambah);
router.post('/create', video_controller.store);
router.get('/:id', video_controller.video_details);
router.post('/:id/update', video_controller.update);
router.post('/:id/destroy', video_controller.destroy);
module.exports = router;