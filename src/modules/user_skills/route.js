const express = require('express');
const userSkillsRouter = express.Router();
const userSkillsCtrl = require('./controller');

const router = function (connection) {
    userSkillsRouter.route('/')
        .get(function (req, res) {
            userSkillsCtrl.getUserSkills()
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    });
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error.toString()
                    });
                });
        })

        .post(function (req, res) {
            userSkillsCtrl.createUserSkills(req.body)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    });
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error.toString()
                    });
                });
        });


    userSkillsRouter.route('/:id')
        .get(function (req, res) {
            userSkillsCtrl.getUserSkillsByPersId(req.params.id)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    });
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error.toString()
                    });
                });
        })
        .delete(function (req, res) {
            console.log(req);
            userSkillsCtrl.deleteUserSkill(req.params.id)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    });
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error.toString()
                    });
                });
        });
    return userSkillsRouter;
};

module.exports = router();