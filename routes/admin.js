const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/addProduct', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'))
})

module.exports = router