const mongoose = require('mongoose');
const moment = require('moment');

const schema = mongoose.Schema;

const userCollection = new schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
   email: {
       type: String,
       required: true,
   },
   password: {
        type: String,
        required: true,
    },
   post: {
       type: String,
       required: true,
   },
   created_at: {
       type: Date,
       default: Date.now,
       get: function (createdAt) {
           return moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
       }
   }
}, {timestamps: true});

module.exports = mongoose.model('User', userCollection);