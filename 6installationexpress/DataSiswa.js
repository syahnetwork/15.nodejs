let router = require('express').Router()

router.get('/', function (req, res) {
  res.json({
    nama: 'richard muhammad',
    tanggalLahir: '14 januari 1994',
    jenisKelamin: 'laki - laki',
    hobi: 'membaca buku'
  })
})

module.exports = router