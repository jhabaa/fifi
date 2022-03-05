const express = require('express')
const mongoose = require('mongoose')

const methodOverride = require('method-override')
const app = express()

//var db = mongoose.connection;
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))



app.get('/', async (req, res) => {
    res.render('index')
})


app.listen(28018)
