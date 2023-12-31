console.log("Web Server started")
const express = require('express');
const app = express();
const router = require('./router')


// 1. Kirish code
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 2. Session code

// 3. Views code
app.set("views", "views");
app.set('view engine', 'ejs')

// 4. Routing code
app.use('/', router)
module.exports = app