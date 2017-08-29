const User = require('./model');
const User_role = require('../user_roles/model');

function create(user) {
    return User.create(user, {
        include: [{
            model: User_role
        }]
    });
}


function getAll() {
    return User.findAll({
        attributes: {
            exclude: ['user_role_id']
        },
        include: [{
            model: User_role
        }]
    });
}

function getById(id) {
    return User.findById(id, {
        attributes: {
            exclude: ['user_role_id']
        },
        include: [{
            model: User_role
        }]
    });
}

function update(user, id) {
    return User.update(user, {where: {id: id}});
}

function deleteObject(user) {
    return User.build(user).destroy();
}

function deleteById(id) {
    return User.destroy({where: {id: id}});
}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.deleteObject = deleteObject;
module.exports.deleteById = deleteById;

