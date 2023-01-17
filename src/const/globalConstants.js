require("dotenv").config();

module.exports = {
  APP_PORT: process.env.APP_PORT || 5000,
  DB_PORT: process.env.DB_PORT || 12345,
}

