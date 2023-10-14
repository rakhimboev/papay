const express = require('express')
const router = express.Router()
const memberController = require('./controllers/memberController')

//member related routes
router.get('/', memberController.home)
router.post('/signup', memberController.signup)
router.post('/login', memberController.login)
router.get('/logout', memberController.logout)

// other routes
router.get('/menu', (req, res) => {
    res.send('menu sahifadasiz')
})
router.get('/community', (req, res) => {
    res.send('community sahifadasiz')
})
module.exports = router
