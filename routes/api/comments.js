const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/comments');

router.get('/comments', commentsCtrl.index);

module.exports = router;