const express = require('express');
const userWorkExperienceRouter = express.Router();
const userWorkExperienceCtrl = require('./controller');

const router = function (connection) {
    userWorkExperienceRouter.route('/')
        .get(function (req, res) {
            userWorkExperienceCtrl.getAllUserWorkExperience()
                .then((result) => {
                    res.json({
                        succes: true,
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
            let userWorkExperience = req.body;
            userWorkExperienceCtrl.createUserWorkExperience(userWorkExperience)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result
                    })
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })
                })
        });

    userWorkExperienceRouter.route('/:id')
        .get(function (req, res) {
            let workExperienceId = req.params.id;
            userWorkExperienceCtrl.getUserWorkExperienceById(workExperienceId)
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
                        data: error
                    })
                })
        })
        .put(function (req, res) {
            let workExperience = req.body;
            userWorkExperienceCtrl.updateUserWorkExperience(workExperience, req.params.id)
                .then(result => {
                    res.json({
                        success: true,
                        data: result
                    })
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })
                })
        })
        .delete(function (req, res) {
            let userWorkExperienceId = req.params.id;
            userWorkExperienceCtrl.deleteUserWorkExperience(userWorkExperienceId)
                .then(result => {
                    res.json({
                        success: true,
                        data: result
                    })
                })
                .catch(function (error) {
                    res.status(400);
                    res.json({
                        success: false,
                        data: error
                    })
                })
        });

    return userWorkExperienceRouter;
};

module.exports = router();