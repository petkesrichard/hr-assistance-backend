var express = require('express');
var skillsRouter = express.Router();
var skillsController = require('./controller');


let router = function() {

    skillsRouter.route('/')
        .get((req,res) => {
            skillsController.getAll()
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
            skillsController.create(req.body)
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
        })
        .delete((req, res) => {
            skillsController.deleteObject(req.body)
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
        })

    skillsRouter.route('/:id')
        .get((req, res) => {
            skillsController.getById(req.params.id)
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
        })
        .put((req, res) => {
            skillsController.update(req.body, req.params.id)
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
        })
        .delete((req, res) => {
            skillsController.deleteById(req.params.id)
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

    return skillsRouter;
}

module.exports = router();