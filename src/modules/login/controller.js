var User = require('../users/model');

function findUser(username, password) {
    return User.findOne({
        where: {
            username: username,
            password: password
        }
    })
}

module.exports.findUser = findUser;