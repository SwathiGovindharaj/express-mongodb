const postService = require("../services/post.service");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json({ data: posts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.status(200).json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
