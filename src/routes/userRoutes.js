const express = require('express');

const userRouter = express.Router();


userRouter.route('/')
.get((req , res) => {
    res.send("All users details");
});


module.exports = userRouter;