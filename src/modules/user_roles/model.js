var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

    var User_Roles = sequelize.define("User_Roles",
        {
            code: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            }
        });

module.exports = User_Roles;
