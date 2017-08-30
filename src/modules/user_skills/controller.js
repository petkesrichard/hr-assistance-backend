const UserSkills = require('./model');

function createUserSkills(userSkill) {
    return UserSkills.create(userSkill);
}

function getUserSkills() {
    return UserSkills.findAll();
}

function getUserSkillsByPersId(userId) {
    return UserSkills.findAll({
        where: {
            personalInfoId: userId
        }
    });
}

function deleteUserSkill(userSkillId) {
    console.log(userSkillId);
    return UserSkills.destroy({
        where: {
            id: userSkillId
        },
    });
}

module.exports.createUserSkills = createUserSkills;
module.exports.getUserSkills = getUserSkills;
module.exports.getUserSkillsByPersId = getUserSkillsByPersId;
module.exports.deleteUserSkill = deleteUserSkill;