const express = require('express');
const educationRouter = express.Router();
const educationController = require('./controller');

const router = function () {
    console.log("Inside ROUTER");
    educationRouter.route('/')
        .get(function (req, res) {
            console.log("INSIDE EDUCATION");
            educationController.getAll()
                .then((data) => {
                    succes: true,
                        res.json(data);
                })
                .catch((error) => {
                    res.status(404),
                        res.json({
                            succes : false,
                            data : error
                        })
                });
        })
        .post(function (req, res) {
            let userEducation = req.body;
            educationController.create(userEducation)
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

    educationRouter.route('/:id')
        .put(function (req, res) {
            let education = req.body;
            educationController.updateEducation(education, req.params.id)
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
        .get(function (req, res) {
            let educationId = req.params.id;
            educationController.getEducationById(educationId)
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
        .delete(function (req, res) {
            let educationId = req.params.id;
            educationController.deleteEducation(educationId)
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

    return educationRouter;
};

module.exports = router();