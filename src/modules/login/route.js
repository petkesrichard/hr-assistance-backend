var express = require('express');
var loginRouter = express.Router();
var loginController = require('./controller');

loginRouter.route('/')
    .post((req,res) => {
        loginController.findUser(req.body.username,req.body.password)
            .then((result) => {
                res.json({
                    success: true,
                    data: result
                });
            })
            .catch((err) => {
                res.json({succes: false, error: err});
            });
    });


module.exports = loginRouter;