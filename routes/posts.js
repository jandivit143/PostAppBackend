const express = require('express');
const PostController = require('../controllers/posts');
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');
const router = express.Router();

// router.post("", (req,res,next) => {
//     // before creating a Post model using mongoose
//     // const post = req.body;

//     // after creating a Post model using mongoose
//     const post = new Post({
//         title: req.body.title,
//         content: req.body.content
//     });
//     post.save().then(createdPost => {
//         res.status(201).json({
//             message: 'Post added successfully!',
//             postId: createdPost._id
//         });
//     });
// });

// using reactive form
router.post("", checkAuth, extractFile, PostController.createPost);

// router.put("/:id", (req,res,next) => {
//     const post = new Post({
//         _id: req.body._id,
//         title: req.body.title,
//         content: req.body.content
//     });
//     Post.updateOne({_id: req.params.id}, post).then(result => {
//         res.status(200).json({
//             message: "Update successful!"
//         })
//     });
// });

// using reactive form
router.put("/:id", checkAuth, extractFile, PostController.updatePost);

router.get('', PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;