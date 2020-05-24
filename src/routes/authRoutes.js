const express = require('express');
const authRouter = express.Router();
const {MongoClient} = require('mongodb');
const passport = require('passport');

const times = [{time:1 , status:0},{time:2 , status:0},{time:3 , status:0},{time:4 , status:0},{time:5 , status:0}]

function router(){
authRouter.route('/signup')
.post((req , res) => {
    const {username , password } = req.body;
    const url = 'mongodb://localhost:27017';
    const dbname = 'CalenderAPI';

    (async function addUsers(){
        let client;
        try{
            client = await MongoClient.connect(url);
            const db = client.db(dbname);
            const col = db.collection('users');
            const user = {username , password , times};
            const results = await col.insertOne(user);
            res.json(results.ops[0]);
        }
        catch(err)
        {
            res.send(err);
        }
    }())
});

authRouter.route('/signin')
.post(passport.authenticate('local' , {
    successRedirect: '/auth/profile',
    failureRedirect: '/'
}));



authRouter.route('/profile')
.get((req, res) => {
    res.send("Here the profile Dashboard");
})
return authRouter;

}

module.exports = router();