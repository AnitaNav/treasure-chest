const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.deletePost);
router.post('/:id/comments', postsCtrl.addComment);


module.exports = router;