let express = require('express')

let app = express()

let port = process.env.port || 9999

app.get('/', (req, res) => res.send('hello borat'))

app.listen(port, function () {
  console.log('running borat on port = ' + port)
})