// Import siswa model
Siswa = require('../model/siswa-model');

// Handle index actions
exports.index = function (req, res) {
  Siswa.get(function (err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Student retrieved Successfully",
      data: siswa
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  var siswa = new Siswa();
  siswa.name = req.body.name ? req.body.name : siswa.name;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  // Save and validate
  siswa.save(function (err) {
    if (err)
      res.json(err);
    res.json({
      message: "New Student Created!",
      data: siswa
    });
  });
};

// Handle view actions
exports.view = function (req, res) {
  Siswa.findById(req.params.siswa_id, function (err, siswa) {
    if (err)
      res.send(err);
    else //need if else because sending response twice, can cause server to crash
      res.json({
        message: "Siswa Details Loading...",
        data: siswa
      });
  });
};

// Handle update actions
exports.update = function (req, res) {
  Siswa.findById(req.params.siswa_id, function (err, siswa) {
    if (err)
      res.send(err)
    siswa.name = req.body.name ? req.body.name : siswa.name;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;

    // Save and validate
    siswa.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: "Student Updated!",
        data: siswa
      });
    });
  });
};

// Handle delete actions
exports.delete = function (req, res) {
  Siswa.remove({
    _id: req.params.siswa_id
  }, function (err, siswa) {
    if (err)
      res.send(err);
    else
      res.json({
        status: "success",
        message: "Student Deleted!"
      });
  });
};