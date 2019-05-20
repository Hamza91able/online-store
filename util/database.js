const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'hmz46w46w', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;