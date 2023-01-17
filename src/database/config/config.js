module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "postgres",
    //logging: false, // oculta las consultas a la bbdd
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};