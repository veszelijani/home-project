'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
module.exports = jsonParser;

app.use(express.static('./static'));
app.use(bodyParser.urlencoded({ extended: false }));

const websiteController = require('./controller/controller');
websiteController.websiteController(app);

app.listen(8080, () => {
    console.log(`The app is listening on port ${PORT}`);
});