const Post = require('../../models/post');


module.exports = {
    create,
    index,
    addComment,
}

async function create(req, res) {
    req.body.user = req.user._id;
    const post = await Post.create(req.body);
    res.json(post)
}

async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}

async function addComment(req, res) {
    let post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    post.comments.push(req.body);
    await post.save();
    const posts = await Post.find({}).sort('-createdAt').exec();
    res.json(posts);
}