var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

    var Skills = sequelize.define("Skills",
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

module.exports = Skills;