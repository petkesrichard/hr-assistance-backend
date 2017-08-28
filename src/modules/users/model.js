"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var UserRoles = require('../user_roles/model');


var Users = sequelize.define("Users", {
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
});

Users.belongsTo(UserRoles,{
        foreignKey: 'user_roles_id',
        targetKey: 'id',
})

module.exports = Users;
