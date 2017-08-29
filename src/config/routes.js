'use strict';

module.exports.init = initRoutes;

function initRoutes(app) {
     let ROUTES_PATH = app.get('root') + '/modules/';
    // // Examples:
     app.use('/users', require(ROUTES_PATH + 'users/route'));
    // app.use('/users', require(ROUTES_PATH + 'users'));
    app.use('/user_roles',require(ROUTES_PATH + 'user_roles/route'));
    app.use('/skills',require(ROUTES_PATH + 'skills/route'));
    app.use('/jobs',require(ROUTES_PATH + 'jobs/route'));
    app.use('/login',require(ROUTES_PATH + 'login/route'));
}