const mongoose = require('mongoose');
const schema = mongoose.Schema;
const date = new Date(Date.now());
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
const dateString = date.toLocaleString('en-US', options).replace(/,/g, '');
console.log(dateString)


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
       default: dateString,
   }
});

module.exports = mongoose.model('User', userCollection);