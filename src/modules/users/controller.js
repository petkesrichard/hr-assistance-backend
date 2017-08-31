const User = require('./model');
const User_role = require('../user_roles/model');
const Personal_info = require('../personal_info/model');

function create(user) {
    return User.create(user, {
        include: [{
            model: User_role
        }]
    });
}

function createUser(user) {
    return new Promise((resolve, reject) => {
        User.create(user)
            .then((insertedUser) => {
                let id = insertedUser.dataValues.id;
                Personal_info.create(
                    {
                        users_id: id,})
                    .then(() => {
                        resolve(insertedUser);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
            .catch(error => {
                reject(error);
            });
    });
}


/*function create(job) {
    return new Promise((resolve, reject) => {
        Jobs.create(job).then((insertedJob) => {
            let id = insertedJob.dataValues.id;
            console.log("Inserted id:",id);

            let job_requirement = sequelize.define('job_requirement', {
                jobs_id: Sequelize.INTEGER,
                skill_id: Sequelize.INTEGER
            });

            job.requirements.forEach(skill => {
                job_requirement.create({jobs_id: id, skill_id: skill.id}).then((data) => {
                    console.log(data);
                    resolve(data);
                }).catch((err) => {
                    reject("Error!" + err)
                });
            })
        }).catch((err) => {
            reject("Create error" + err)
        });
    });

    // return Jobs.create(job, {
    //     include: [{
    //         model: Skills
    //     }]
    // })

}*/


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
module.exports.createUser = createUser;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.deleteObject = deleteObject;
module.exports.deleteById = deleteById;

