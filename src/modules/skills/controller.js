var Skills = require('./model');


function create(skill) {
    return Skills.create(skill);
}

function getAll() {
    return Skills.findAll();
}

function getById(id) {
    return Skills.findById(id);
}

function update(skill, id) {
    return Skills.update(skill, {where: {id: id}});
}

function deleteObject(skill) {
    return Skills.build(skill).destroy();
}

function deleteById(id) {
    return Skills.destroy({where: {id: id}});
}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.deleteObject = deleteObject;
module.exports.deleteById = deleteById;

