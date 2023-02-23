const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://kubrakkirill7:kubrak1@cluster0.mrhdbq3.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB is connected')
    })
    .catch(error => {
        console.log(error)
    })

