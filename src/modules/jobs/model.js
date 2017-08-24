var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var Skills = require('../skills/model');

var Jobs = sequelize.define("Jobs",{
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    benefits: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Jobs.belongsToMany(Skills,{
    through:'JOB_REQUIREMENT',
    foreignKey:'jobs_id',
    onDelete: 'cascade'
});

Skills.belongsToMany(Jobs,{
    through:'JOB_REQUIREMENT',
    foreignKey:'skill_id',
});

module.exports = Jobs;