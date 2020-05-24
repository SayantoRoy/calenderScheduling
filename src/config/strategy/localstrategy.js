const passport = require('passport');
const { Strategy } = require('passport-local');
const {MongoClient } = require('mongodb');


module.exports = function localstrategy(){
    passport.use(new Strategy(
        {
            usernameField :'username',
            passwordField :'password'
        }, (username , password ,done) => {
            
    const url = 'mongodb://localhost:27017';
    const dbname = 'CalenderAPI';

    (async function findUsers(){
        let client;
        try{
            client = await MongoClient.connect(url);
            const db = client.db(dbname);
            const col = db.collection('users');
            
            const user = await col.findOne({username});
            if(user.password === password)
            {
                done(null ,user);
            }
            else{
                done(null ,false);
            }
        }
        catch(err)
        {
            res.send(err);
        }
        client.close();
    }());
        }
    ))
}