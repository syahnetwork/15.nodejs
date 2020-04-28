//init express router
let router = require('express').Router()

//default API response
router.get('/', function (req, res) {
  res.json({
    status: 'api working',
    message: 'welcome'
  })
})

//import student controller
let siswaController = require('../controller/siswa-controller')

//student routes
router.route('/siswa')
  .get(siswaController.index)
  .post(siswaController.new);
router.route('/siswa/:siswa_id')
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);

module.exports = router;