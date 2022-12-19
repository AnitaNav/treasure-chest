const express = require('express');
const router = express.Router();
const toysCtrl = require('../../controllers/api/toys');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.get('/', toysCtrl.index);
router.post('/', ensureLoggedIn, toysCtrl.create);

module.exports = router;