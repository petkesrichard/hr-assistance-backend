var express = require('express');
var jobsRouter = express.Router();
var jobsController = require('./controller');


let router = function() {

    jobsRouter.route('/')
        .get((req,res) => {
            jobsController.getAll()
                .then((data) => {
                    succes: true,
                        res.json(data);
                })
                .catch((error) => {
                    res.status(404),
                        res.json({
                            succes : false,
                            data : error.toString()
                        })
                });
        })
        .post((req, res) => {
            console.log(">>>>>>>>>> Req <<<<<<<<<<<<", req.body);
            jobsController.create(req.body)
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
            jobsController.deleteObject(req.body)
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

    jobsRouter.route('/:id')
        .get((req, res) => {
            jobsController.getById(req.params.id)
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
            jobsController.update(req.body, req.params.id)
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
            jobsController.deleteById(req.params.id)
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

    return jobsRouter;
}

module.exports = router();