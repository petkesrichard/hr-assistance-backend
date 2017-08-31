var express = require('express');
var usersRouter = express.Router();
var usersController = require('./controller');

let router = function () {
    usersRouter.route('/')
        .get((req, res) => {
            usersController.getAll()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
        })
        .post((req, res) => {
            usersController.createUser(req.body)
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json({succes: false, error: err});
                });
        });
    
    usersRouter.route('/:id')
        .get((req, res) => {
            usersController.getById(req.params.id)
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
        })
        .put((req, res) => {
            usersController.update(req.body, req.params.id)
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
        })
        .delete((req, res) => {
            usersController.deleteById(req.params.id)
                .then((data) => {
                    succes: true,
                        res.json(data);
                })
                .catch((error) => {
                    res.status(404),
                        res.json({
                            succes: false,
                            data: error
                        })
                });
        });

    return usersRouter;
};

module.exports = router();