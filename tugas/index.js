//import express
let express = require('express')

//import body parse
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
//init app
let app = express()

//import routes
let apiRoutes = require('./routes/routes')

//body parse setup to handle post request
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/restapi')
let db = mongoose.connection

//setup server port
let port = process.env.port || 9999

//send response
app.get('/', (req, res) => res.send('hello'))

//app apiroutes
app.use('/api', apiRoutes)


//launch app
app.listen(port, function () {
  console.log('run tugas in port ' + port)
})