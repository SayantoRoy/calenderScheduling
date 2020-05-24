const express = require('express');
const authRouter = express.Router();


authRouter.route('/')
.get((req , res) => {
    res.send("Hello Auth Baby!!");
});


module.exports = authRouter;