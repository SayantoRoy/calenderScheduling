const passport = require('passport');

require('./strategy/localstrategy')();

module.exports = function passporter(app){
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user , done) => {
        done(null ,user);
    });

    passport.deserializeUser((user , done) => {
        done(null,user);
    });



}