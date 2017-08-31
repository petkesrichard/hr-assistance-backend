var PersonalInfo = require('../../modules/personal_info/model');
var User = require('../../modules/users/model');
var Skills = require('../skills/model');
var Education = require('../../modules/user_education/model');
var Experience = require('../../modules/user_work_experience/model');

function createPersonalInfo(persInf) {
    return PersonalInfo.create(persInf,
        {
            include: [
                {
                    model: User,
                }]
        });
}

function getAllPersonalInfo() {
    return PersonalInfo.findAll({
        include: [
            {
                model: User,
            }]
    });
}

function getPersonalInfoById(id) {
    return PersonalInfo.findById(id, {
        include: [
            {
                model: User,
            }]
    });
}

function getPersonalInfoByUserID(id) {
    return PersonalInfo.findOne({
        where  :{
            users_id : id
        }
    })
}

function getAllPersonalInfoById(id) {
    return PersonalInfo.findById(id, {

        include: [
            {
                model: Education,
            },
            {
                model: Experience,

            },
            {
                model: Skills,
            },
            {
                model: User,
            }
        ],

    });
}

function editPersonalInfo(persInf, userId) {
    return PersonalInfo.update(persInf,
        {
            where: {
                id: userId
            }
        });
}

function deletePersonalInfo(userId) {
    return User.destroy({

        where: {
            id: userId,
        },

    });
}

module.exports.createPersonalInfo = createPersonalInfo;
module.exports.getAllPersonalInfo = getAllPersonalInfo;
module.exports.getPersonalInfoById = getPersonalInfoById;
module.exports.getAllPersonalInfoById = getAllPersonalInfoById;
module.exports.editPersonalInfo = editPersonalInfo;
module.exports.deletePersonalInfo = deletePersonalInfo;
module.exports.getPersonalInfoByUserID = getPersonalInfoByUserID;
