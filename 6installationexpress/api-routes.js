//init express router
let router = require('express').Router()

//set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'api working',
    message: 'welcome to resthub'
  })
})

//import contact controller
let contactController = require('./contactcontroller')

//contact routes
router.route('/contacts')
  .get(contactController.index)
  .post(contactController.new)
router.route('/contacts/:contact_id')
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete)

//exports API
module.exports = router