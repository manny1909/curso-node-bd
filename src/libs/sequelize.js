const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config()
const env = process.env.NODE_ENV || 'development';
const db = require('./../../config/config')[env]; 
const setupModels = require('../../models/index');
const USER = encodeURIComponent(db.username)
const PASSWORD = encodeURIComponent(db.password)
const URI = `mssql://${USER}:${PASSWORD}@${db.host}:${db.dbPort}/${db.database}`
console.log('URI: ',URI)

let sequelize;
if (URI) {
  sequelize = new Sequelize(URI, db);
} else {
  sequelize = new Sequelize(db.database, db.username, db.password, db);
}
setupModels(sequelize)
sequelize.sync()
module.exports = sequelize
