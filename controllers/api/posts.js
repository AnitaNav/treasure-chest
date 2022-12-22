const Post = require('../../models/post');


module.exports = {
    create,
    index,
    addComment,
    updatePost,
    deletePost,
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const post = await Post.create(req.body);
    res.json(post)
}

async function index(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}

async function updatePost(req, res, next) {
  console.log(req.body);
    try {
      const post = await Post.findByIdAndUpdate(
        {_id: req.params.id, user: req.user._id}, req.body, {new : true}
        )
        console.log(post, "check");
      res.json(post);
    } catch (err) { 
      return next(err);
    }
  }

async function deletePost(req, res) {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.json(deletedPost);
}

async function addComment(req, res) {
    let post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    post.comments.push(req.body);
    await post.save();
    const posts = await Post.find({}).sort('-createdAt').exec();
    res.json(posts);
}