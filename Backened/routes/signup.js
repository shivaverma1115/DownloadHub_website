const express = require("express") ;

const { SignupModelAuth } = require("../model/signup.model")
const bcrypt = require('bcrypt');

const signupRouter = express.Router() ;

signupRouter.post("/", async (req, res) => {
    const { email, password, name } = req.body;
    const is_user = await SignupModelAuth.findOne({ email: email })
    if (is_user) {
        res.send({ msg: "Email already registered, Try Login?" })
    }
    try {
        bcrypt.hash(password, 3, async (err, hash) => {
            const new_user = new SignupModelAuth({
                email,
                password: hash,
                name,
            })
            await new_user.save()
            res.send({ msg: "Sign up successfull" })
        })
    } catch (error) {
        console.log(error) ;
    }
})


module.exports={
    signupRouter
}