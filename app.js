const express = require('express');
let path = require('path');
const app = express();

const debug = require('debug')('app');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const Port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:'SchedulerAPI'}));

require('./src/config/passport.js')(app);


const userRouter = require('./src/routes/userRoutes');
const authRouter = require('./src/routes/authRoutes');

app.use('/auth' , authRouter);

app.use('/users' , userRouter);








app.get('/' , (req, res)=> {
    res.send("Hello There");
});

app.listen(Port , function(){
    console.log(`Listening on ${Port}`);
})
