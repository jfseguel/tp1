const express = require("express");
const logger = require("morgan");

const app = express();

var pacientesRouter = require("./routes/pacientes");
var medicosRouter = require("./routes/medicos");
var tratamientosRouter = require("./routes/tratamientos");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/pacientes", pacientesRouter);
app.use("/medicos", medicosRouter);
app.use("/tratamientos", tratamientosRouter);

app.listen(process.env.APP_PORT, function () {
  console.log("Servidor escuchando en localhost:3000");
});
