const userModel = require('../models/userModel.js')
const {request, response} = require("express");

const getPost = (request, response) => {
    userModel.find()
        .then(result => {
            response.render('homePage', {
                users: result,
            })
        })
        .catch(error => {
            console.log(error)
        })
}
const addPost = (request, response) => {
    let newUser = new userModel(request.body);
    newUser.save()
        .then(() => {
            getPost(request, response)
        })
        .catch(error => {
            console.log(error)
        })
}
const deletePost = (req, res) => {
    const postId = req.body.postId;
    userModel.findByIdAndRemove(postId, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting post');
        } else {
            console.log('Post deleted');
            res.redirect('/')
        }
    });
};
// const addPost = (request, response) => {
//     const {input} = request.body;
//     if (input && input.length >= 25) {
//         let newUser = new userModel(request.body);
//         newUser.save()
//             .then(() => {
//                 getPost(request, response)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     } else {
//         response.status(400).send('Input must be at least 25 characters long');
//     }
// }

module.exports = {
    getPost,
    addPost,
    deletePost,
}