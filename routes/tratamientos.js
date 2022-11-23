var express = require("express");
var router = express.Router();

router.get("/tratamientos", function (req, res, next) {
  res.send("Listado de tratamientos");
});

router.get("/tratamientos/:id", function (req, res, next) {
  res.send("Información del tratamiento " + req.params.id);
});

router.post("/tratamientos", function (req, res, next) {
  res.send("Crear tratamiento");
});

module.exports = router;
