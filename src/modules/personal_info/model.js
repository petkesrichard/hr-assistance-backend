var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Skills = require('../skills/model');
var Education = require('../../modules/user_education/model');
var Experience = require('../../modules/user_work_experience/model');


var PersonalInfo = sequelize.define("Personal_Info",
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


PersonalInfo.hasMany(Education, {
    foreignKey: {
        field: 'personal_info_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

PersonalInfo.hasMany(Experience, {
    foreignKey: {
        field: 'personal_info_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
});

PersonalInfo.belongsToMany(Skills, {
    through: {
        model: 'user_skills',
    },
    foreignKey: {
        name: 'personalInfoId',
        field: 'personal_info_id'
    },
    primaryKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

Skills.belongsToMany(PersonalInfo, {
    through: {
        model: 'user_skills',
    },
    foreignKey: {
        field: 'skill_id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
});

module.exports = PersonalInfo;
