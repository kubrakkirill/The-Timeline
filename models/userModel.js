const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userCollection = new schema({
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
       default: Date.now(),
   }
});

module.exports = mongoose.model('User', userCollection);