const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/posts', postsCtrl.index);
router.post('/posts', postsCtrl.create);
router.post('/:id/comments', postsCtrl.addComment);

module.exports = router;