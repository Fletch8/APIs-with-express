// gives access to varibles in our .env (ex: API_KEY)
require('dotenv').config()

// to see env varibles
// console.log(process.env)
// console.log(process.env.API_KEY)
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

// Middleware
app.use(expressLayouts)
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//routes
app.get('/', (req, res) => {
    res.send('hello there..')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on Port: ${PORT}`))