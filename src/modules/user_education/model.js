var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);


var UserEducation  = sequelize.define("User_Education",{
    school_name: {
        type: Sequelize.STRING,
    },
    graduated_year: {
        type: Sequelize.DATE
    },
    description: {
        type: Sequelize.STRING
    },
    personal_info_id: {
        type: Sequelize.INTEGER
    }
});

module.exports = UserEducation;