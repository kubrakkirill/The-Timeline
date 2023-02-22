const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const pagesController = require('./controller/pages')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', pagesController.homePage);
app.post('/addPost', pagesController.addNewPost);

let PORT = 3000;
app.listen(PORT, () => console.log(`The Timeline is on ${PORT}`))

//xefsyp-9xavvi-despiX