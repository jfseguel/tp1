var express = require("express");
var router = express.Router();

router.get("/medicos", function (req, res, next) {
  res.send("Listado de médicos");
});

router.get("/medicos/:id", function (req, res, next) {
  res.send("Información del médico " + req.params.id);
});

router.post("/medicos", function (req, res, next) {
  res.send("Crear médico");
});

module.exports = router;
