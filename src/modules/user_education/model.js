var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var PersonalInfo = require('../personal_info/model');

var UserEducation  = sequelize.define("UserEducation",{
    school_name: {
        type: sequelize.STRING,
    },
    graduated_year: {
        type: sequelize.DATE
    },
    description: {
        type: sequelize.STRING
    },
});

UserEducation.belongsTo(PersonalInfo, {
    foreignKey: 'personal_info_id'
})