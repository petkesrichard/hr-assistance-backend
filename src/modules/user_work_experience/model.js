"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var PersonalInfo = require('../personal_info/model');

var UserWorkExperience = sequelize.define("UserWorkExperience",{
    company_name: {
        type: sequelize.TEXT
    },
    position: {
        type: sequelize.TEXT
    },
    start_date: {
        type: sequelize.DATE
    },
    end_date: {
        type: sequelize.DATE
    }
});

UserWorkExperience.belongsTo(PersonalInfo, {
    foreignKey: 'personal_info_id'
})