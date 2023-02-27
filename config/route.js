const express = require('express');
const route = express.Router();
const userController = require('../controller/userController')

route.get('/', userController.getPost);
route.post('/addPost', userController.addPost);
route.delete('/deletePost/:id', userController.deletePost);

module.exports = route;