var express = require("express");
var router = express.Router();

router.get("/pacientes", function (req, res, next) {
  res.send("Listado de pacientes");
});

router.get("/pacientes/:id", function (req, res, next) {
  res.send("Información del paciente " + req.params.id);
});

router.post("/pacientes", function (req, res, next) {
  res.send("Crear paciente");
});

module.exports = router;
