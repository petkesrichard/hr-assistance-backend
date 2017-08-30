'use strict';

module.exports.init = initRoutes;

// /const EducationRoute=require('../modules/user_education/route')();

function initRoutes(app) {
     let ROUTES_PATH = app.get('root') + '/modules/';
    console.log("Route",ROUTES_PATH + 'user_education/route')
    // // Examples:
     app.use('/users', require(ROUTES_PATH + 'users/route'));
    // app.use('/users', require(ROUTES_PATH + 'users'));
    app.use('/user_roles',require(ROUTES_PATH + 'user_roles/route'));
    app.use('/skills',require(ROUTES_PATH + 'skills/route'));
    app.use('/jobs',require(ROUTES_PATH + 'jobs/route'));
    app.use('/login',require(ROUTES_PATH + 'login/route'));

    app.use('/user_education',require(ROUTES_PATH + 'user_education/route'));
    app.use('/personal_info',require(ROUTES_PATH + 'personal_info/route'));
    app.use('/user_experience',require(ROUTES_PATH + 'user_work_experience/route'));
    app.use('/user_skills',require(ROUTES_PATH + 'user_skills/route'));
    //app.use('/user_education',EducationRoute);
}