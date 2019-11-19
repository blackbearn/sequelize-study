var sequelize = require('../connect.js');
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    }
}, {
    freezeTableName: true // Model 对应的表名将与model名相同
});

User.sync({force: true}).then(function () {
    // 已创建数据表
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

module.exports = User;

