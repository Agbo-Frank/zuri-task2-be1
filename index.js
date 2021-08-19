var express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')
const port = process.env.PORT || 8000

var app = express()

app.set('view engine', 'ejs')

//var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/success', urlencodedParser, (req, res) => {
    res.render('success-page', {data: req.body})
})


app.listen(port)