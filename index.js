// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hola, mundo");
//   })
//   .listen(3000);

// console.log("Server escuchando en localhost:3000");

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

app.listen(3000, function () {
  console.log("Servidor escuchando en localhost:3000");
});
