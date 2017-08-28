var express = require('express');
var persInfoRouter = express.Router();

var persInfoCtrl = require('./controller');

let router = function (connection) {

    persInfoRouter.route('/')
        .post(function (req, res) {
            let job = req.body;
            console.log(job);
            persInfoCtrl.createPersonalInfo(job)
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

    persInfoRouter.route('/')
        .get(function (req, res) {
            persInfoCtrl.getAllPersonalInfo()
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

    persInfoRouter.route('/:id')
        .get(function (req, res) {
            let persInfId = req.params.id;
            persInfoCtrl.getPersonalInfoById(persInfId)
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
                    })
                })
        });

    persInfoRouter.route('/all/:id')
        .get(function (req, res) {
            let persInfId = req.params.id;
            persInfoCtrl.getAllPersonalInfoById(persInfId)
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
                    })
                })
        });

    persInfoRouter.route('/:id')
        .delete(function (req, res) {
            let userId = req.params.id;
            persInfoCtrl.deletePersonalInfo(userId)
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
        .put(function (req, res) {
            let userId = req.params.id;
            let user =req.body;
            persInfoCtrl.editPersonalInfo(user,userId)
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
    return persInfoRouter;

};

module.exports = router;