const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.put('/update/:id', ensureLoggedIn, postsCtrl.updatePost);
router.delete('/:id',ensureLoggedIn, postsCtrl.deletePost);
router.post('/:id/comments', postsCtrl.addComment);


module.exports = router;