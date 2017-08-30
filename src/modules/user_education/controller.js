var UserEducation = require('./model');

function create(education) {
    return UserEducation.create(education);
}

function getAll() {
    return UserEducation.findAll();
}

function getEducationById(id) {
    return UserEducation.findById(id);
}

function updateEducation(education, id) {
    return UserEducation.update(education, {
        where: {
            id: id
        }
    });
}

function deleteEducation(id) {
    return UserEducation.destroy({
        where: {
            id: id
        }
    });
}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getEducationById = getEducationById;
module.exports.updateEducation = updateEducation;
module.exports.deleteEducation = deleteEducation;