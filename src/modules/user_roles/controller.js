var UserRoles = require('./model');
var Sequelize = require('sequelize');

class UserRolesController {

        create(user_role) {
            return UserRoles.create(user_role);
        }

        getAll() {
            return UserRoles.findAll();
        }

        getById(id) {
            return UserRoles.getById(id);
        }

        update(user_role,id) {
            return UserRoles.update(user_role, {where: {id : id}});
        }

        deleteObject(user_role) {
            return UserRoles.build(user_role).destroy();
        }

        deleteById(id) {
            return UserRoles.destroy({where:{id:id}});
        }

}
//console.log('class',UserRolesController);
module.exports = UserRolesController;