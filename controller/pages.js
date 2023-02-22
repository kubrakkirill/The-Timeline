const homePage = (request, response) => {
    response.render('../styles/style.css')
    response.render('homePage', {
        user: {
            text: null,
        },
        err: null
    })
}

const addNewPost = (request, response) => {
    if(request.body.text !== ''){
        response.render('homePage', {
            user: {
                text: request.body.text,
            },
            err: null
        })
    } else {
        response.render('homePage', {
            user: {
                text: request.body.text,
            },
            err: 'Inputs should not be empty'
        })
    }
}

module.exports = {
    homePage,
    addNewPost
}