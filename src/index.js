const express = require("express");
// const logger = require("morgan");
const globalConstants = require('./const/globalConstants');
const indexRoutes = require('./routes/index.routes')

const configApi = (app)=> {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

const configRouter = (app) => {
  app.use('/api/', indexRoutes.initRoutes())
}

const init = () => {
  const app = express()
  configApi(app)

  configRouter(app)

  app.listen(globalConstants.APP_PORT, function () {
    console.log("Servidor escuchando en localhost: " + globalConstants.APP_PORT);
  });
}

init();