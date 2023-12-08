const dotenv = require('dotenv');
dotenv.config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "dbPort": process.env.DB_PORT || 1433,
    "host": process.env.DB_HOST,
    "dialect": "mssql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "dbPort": process.env.DB_PORT || 1433,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "dbPort": process.env.DB_PORT || 1433,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
