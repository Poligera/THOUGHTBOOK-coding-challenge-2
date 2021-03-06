const express = require("express");
const router = express.Router();

const Post = require("../models/post");

// Post index route:
router.get("/", async (req, res) => {
  try {
    const posts = await Post.all;
    res.json(posts);
  } catch (err) {
    res.status(500).json({ err });
  }
});

// Get all posts route:
router.post("/", async (req, res) => {
  try {
    const post = await Post.create(
      req.body.date,
      req.body.title,
      req.body.pseudonym,
      req.body.body
    );
    res.json(post);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
