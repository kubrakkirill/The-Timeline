const express = require('express');
const route = express.Router();
const userController = require('../controller/userController')

route.get('/', userController.getPost);
route.post('/addPost', userController.addPost);

module.exports = route;