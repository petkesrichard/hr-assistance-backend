const express = require('express');
const jobApplyRouter = express.Router();
const jobApplyCtrl = require('./controller');

const router = function (connection) {
    jobApplyRouter.route('/')
        .post(function (req, res) {
            jobApplyCtrl.createJobApply(req.body)
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

jobApplyRouter.route('/:id')
    .get(function (req, res) {
        jobApplyCtrl.getUserApplyById(req.params.id)
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
    jobApplyCtrl.deleteJobId(req.params.id)
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


return jobApplyRouter;
};

module.exports = router();