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
            last_login: {
                type: Sequelize.DATE
            },
});

Users.belongsTo(UserRoles,{
            foreignKey: 'user_roles_id'
})

module.exports = Users;
