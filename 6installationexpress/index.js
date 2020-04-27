let express = require('express')

//import routes
let apiRoutes = require('./api-routes')
let dataSiswaRoutes = require('./DataSiswa')

let app = express()

let port = process.env.port || 9999

app.get('/', (req, res) => res.send('hello borat'))

//app apiroutes
app.use('/api', apiRoutes)
app.use('/datasiswa', dataSiswaRoutes)

app.listen(port, function () {
  console.log('running borat on port = ' + port)
})