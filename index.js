// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hola, mundo");
//   })
//   .listen(3000);

// console.log("Server escuchando en localhost:3000");

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(3000, function () {
  console.log("Servidor escuchando en localhost:3000");
});
