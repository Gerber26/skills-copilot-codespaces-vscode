//Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Create a new comment
router.post('/newComment', commentController.newComment);

//Get all comments
router.get('/getComments', commentController.getComments);

//Get all comments by user
router.get('/getCommentsByUser', commentController.getCommentsByUser);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);

//Get all comments by post
router.get('/getCommentsByPost', commentController.getCommentsByPost);