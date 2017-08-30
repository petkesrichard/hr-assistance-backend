"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var PersonalInfo = require('../personal_info/model');

var UserWorkExperience = sequelize.define("User_Work_Experience",{
    company_name: {
        type: Sequelize.STRING,
    },
    position: {
        type: Sequelize.STRING
    },
    start_date: {
        type: Sequelize.DATE
    },
    end_date: {
        type: Sequelize.DATE
    }
});

module.exports = UserWorkExperience;