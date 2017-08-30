var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

const UserSkills = sequelize.define("user_skills", {
    personalInfoId: {
        field:'personal_info_id',
        type: Sequelize.INTEGER,
    },
    skillsId: {
        field:'skill_id',
        type: Sequelize.INTEGER,
    }
});

module.exports = UserSkills;