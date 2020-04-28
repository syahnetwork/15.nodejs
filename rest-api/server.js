let express = require('express')
app = express()
bodyParser = require('body-parser')

let port = 9999
let router = express.Router()

//model instances
let User = require('./app/models/user')

//use body parser to get data from HTTP request
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//create connection to mongodb
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/user')

//API routes
//this one is root routes, just a simple response
router.get('', function (req, res) {
  res.json({
    message: 'welcome to user REST API'
  })
})

//model related routes
router.route('/user')
  .post(function (req, res) {
    let user = new User()
    user.username = req.body.username;
    user.password = req.body.password
    user.name = req.body.name
    user.email = req.body.email

    user.save(function (err) {
      if (err) res.send(err)
      else res.json({
        message: 'new user created'
      })
    })
  })

  .get(function (req, res) {
    User.find(function (err, users) {
      if (err) res.send(err)
      else res.json(users)
    })
  })

//get by params
router.route('/user/:username')
  .get(function (req, res) {
    User.findOne({
      username: req.params.username
    }, function (err, user) {
      if (err) res.send(err)
      else res.json(user)
    })
  })

  .put(function (req, res) {
    User.findOne({
      username: req.params.username
    }, function (err, user) {
      if (err) res.send(err)
      else {
        user.username = req.body.username
        user.password = req.body.password
        user.name = req.body.name
        user.email = req.body.email
        user.save(function (err) {
          if (err) res.send(err)
          else res.json({
            message: 'user updated'
          })
        })
      }
    })
  })

  .delete(function (req, res) {
    User.remove({
      username: req.params.username
    }, function (err, user) {
      if (err) res.send(err)
      else res.json({
        message: 'user deleted'
      })
    })
  })

app.use('/api', router)
app.listen(port)
console.log('services started at port = ' + port)