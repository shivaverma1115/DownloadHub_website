const express = require("express") ;
const loginRouter = express.Router() ;

const { SignupModelAuth } = require("../model/signup.model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

loginRouter.post("/", async (req, res) => {
    const { email, password } = req.body;
    const is_user = await SignupModelAuth.findOne({ email })
    if (is_user) {
        const hashed_pwd = is_user.password
        bcrypt.compare(password, hashed_pwd, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: is_user._id }, process.env.SECRET_KEY)
                res.send({
                    msg: "Login successfull",
                    token: token
                })
            }
            else {
                res.send({
                    msg: "Login failed"
                })
            }
        });
    }
    else {
        res.send({
            msg: "Sign up first"
        })
    }
})

module.exports={
    loginRouter
}