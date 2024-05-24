const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sportconnect', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;