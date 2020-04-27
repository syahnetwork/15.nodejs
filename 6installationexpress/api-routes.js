//init express router
let router = require('express').Router()

//set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'api working',
    message: 'welcome to resthub'
  })
})

//exports API
module.exports = router