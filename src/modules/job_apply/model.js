var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
const Users =require('../users/model');


const JobApply = sequelize.define("job_applies", {
    jobs_id: {
        field:'jobs_id',
        type: Sequelize.INTEGER,
    },
    users_id: {
        field:'users_id',
        type: Sequelize.INTEGER,
    }
});

JobApply.belongsTo(Users, {
    foreignKey: {
        name: 'users_id',
        field: 'users_id'
    },
});
module.exports = JobApply;