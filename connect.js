var Sequelize = require('sequelize');

let sequelize = new Sequelize("sequelize-study", "root", "root123", {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // 仅 SQLite 适用
    storage: 'path/to/database.sqlite'
});

module.exports = sequelize;
