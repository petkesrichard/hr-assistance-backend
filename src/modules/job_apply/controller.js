const JobApply = require('./model');
const Users = require('../users/model');

function createJobApply(jobApply) {
    return JobApply.create(jobApply);
}

function getUserApplyById(jobId) {
    return JobApply.findAll({
        where: {
            jobs_id: jobId
        },
        include: Users


    })
}

function deleteJobId(jobApplyId) {
    return JobApply.destroy({
        where: {
            id: jobApplyId
        }
    })
}

module.exports.createJobApply = createJobApply;
module.exports.getUserApplyById = getUserApplyById;
module.exports.deleteJobId = deleteJobId;