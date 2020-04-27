let express = require('express')

//import body parser
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let app = express()

//import routes
let apiRoutes = require('./api-routes')
let dataSiswaRoutes = require('./DataSiswa')

//config bodyparser
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/borat')

let db = mongoose.connection


//setup port
let port = process.env.port || 9999

app.get('/', (req, res) => res.send('hello borat from nodemon'))

//app apiroutes
app.use('/api', apiRoutes)
app.use('/datasiswa', dataSiswaRoutes)

app.listen(port, function () {
  console.log('running borat on port = ' + port)
})