const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Home sahifadasiz')
})
router.get('/menu', (req, res) => {
    res.send('menu sahifadasiz')
})
router.get('/community', (req, res) => {
    res.send('community sahifadasiz')
})
module.exports = router