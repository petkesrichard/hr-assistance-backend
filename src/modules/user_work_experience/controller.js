const WorkExperience = require('./model');

function createUserWorkExperience(userUserWorkExperience) {
    return WorkExperience.create(userUserWorkExperience);
}

function getAllUserWorkExperience() {
    return WorkExperience.findAll();
}

function getUserWorkExperienceById(userUserWorkExperienceId) {
    return WorkExperience.findById(userUserWorkExperienceId);
}

function updateUserWorkExperience(experience, id) {
    return WorkExperience.update(experience, {
        where: {
            id: id
        }
    });
}

function deleteUserWorkExperience(userWorkExperienceId) {
    return WorkExperience.destroy({
        where: {
            id: userWorkExperienceId
        }
    });
}

module.exports.createUserWorkExperience = createUserWorkExperience;
module.exports.getAllUserWorkExperience = getAllUserWorkExperience;
module.exports.getUserWorkExperienceById = getUserWorkExperienceById;
module.exports.updateUserWorkExperience = updateUserWorkExperience;
module.exports.deleteUserWorkExperience = deleteUserWorkExperience;