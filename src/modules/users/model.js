"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var User_Roles = require('../user_roles/model');
var PersonalInfo = require('../personal_info/model');

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

Users.belongsTo(User_Roles,{
    foreignKey: {
        name: 'user_roles_id',
        field: 'user_roles_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

Users.hasOne(PersonalInfo, {
    foreignKey: {
        name: 'users_id',
        field: 'users_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

PersonalInfo.belongsTo(Users, {
    foreignKey: {
        name: 'users_id',
        field: 'users_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

module.exports = Users;

