const comment = require('../../models/comment');
const Comment = require('../../models/comment');

module.exports = {
    createdAt,
    index
}

async function createdAt(req, res) {
    req.body.user = req.user._id;
    const comment = await Comment.create(req.body);
    res.json(comment)
}

async function index(req, res) {
    const comments = await Comment.find({});
    res.json(comments);
}