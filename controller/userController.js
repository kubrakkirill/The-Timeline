const userModel = require('../models/userModel.js')

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
    let newUser = new userModel(request.body)
    newUser.save()
        .then(() => {
            getPost(request, response)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports = {
    getPost,
    addPost
}