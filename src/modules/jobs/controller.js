var Jobs = require('./model');
var Skill = require('../skills/model');
var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

function create(job) {
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

}


function getAll() {
    return Jobs.findAll({
        include: [{
            model: Skill
        }]
    });
}

function getById(id) {
    return Jobs.findById(id,{
        include: [{
            model: Skill
        }]
    });
}

function update(skill, id) {
    return Jobs.update(skill, {where: {id: id}});
}

function deleteObject(skill) {
    return Jobs.build(skill).destroy();
}

function deleteById(id) {
    return Jobs.destroy({where: {id: id}});
}

module.exports.create = create;
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.deleteObject = deleteObject;
module.exports.deleteById = deleteById;

