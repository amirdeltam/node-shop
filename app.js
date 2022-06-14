const express = require('express')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express()

app.use('/admin',adminRoutes)

app.use(shopRoutes)

app.use((req,res) => {
    res.status(404).send('Page Not Font!')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)