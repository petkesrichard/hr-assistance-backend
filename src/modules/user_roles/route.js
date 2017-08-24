var express = require('express');
var userRolesRouter = express.Router();
var UserControlClass = require('./controller');
var userRolesController = new UserControlClass();


let router = function() {

    userRolesRouter.route('/')
        .get((req,res) => {
            userRolesController.getAll()
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
        .post((req, res) => {
            userRolesController.create(req.body)
                .then((data) => {
                    succes: true,
                        res.json(data);
                })
                .catch((err) => {
                    res.status(404),
                        res.json({
                            succes: false,
                            data: error
                        })
                });
        })
        .delete((req, res) => {
            userRolesController.deleteObject(req.body)
                .then((data) => {
                    succes: true,
                    res.json(data);
                })
                .catch((err) => {
                    res.status(404),
                        res.json({
                            succes: false,
                            data: error
                        })
                });
        })

    userRolesRouter.route('/:id')
        .get((req, res) => {
            userRolesController.getById(req.params.id)
                .then((data) => {
                    succes: true,
                    res.json(data);
                })
                .catch((err) => {
                    res.status(404),
                        res.json({
                            succes: false,
                            data: error
                        })
                });
        })
        .put((req, res) => {
            userRolesController.update(req.body, req.params.id)
                .then((data) => {
                    succes: true,
                    res.json(data);
                })
                .catch((err) => {
                    res.status(404),
                        res.json({
                            succes: false,
                            data: error
                        })
                });
        })
        .delete((req, res) => {
            userRolesController.deleteById(req.params.id)
                .then((data) => {
                    succes: true,
                    res.json(data);
                })
                .catch((err) => {
                    res.status(404),
                        res.json({
                            succes: false,
                            data: error
                        })
                });
        });


    return userRolesRouter;

}

module.exports = router();