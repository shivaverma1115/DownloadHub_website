const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
    email: { type: String ,require:true},
    password: { type: String, require: true },
    name: { type: String, require: true }
})
const SignupModelAuth = mongoose.model("signup", signupSchema);

module.exports = {
    SignupModelAuth
}