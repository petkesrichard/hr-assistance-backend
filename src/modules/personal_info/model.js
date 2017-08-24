var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var Users = require('../users/model');
var Skills = require('../skills/model');

var PersonalInfo = sequelize.define("UserRoles",
    {
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
        },

    }
);

PersonalInfo.belongsTo(Users, {
    foreignKey: 'users_id'
});
PersonalInfo.belongsToMany(Skills, {
    through: 'user_skills',
    foreignKey: 'personal_info_id',
});
Skills.belongsToMany(PersonalInfo, {
    through: 'user_skills',
    foreignKey: 'id'
});

