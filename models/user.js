const  mongoose = require("mongoose");
const Role = require("../_helpers/role")
 const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
     lastName: {type: String, required: true},
     email:{type: String, required: true},
     password:{type: String, required: true},
     role: {
        type: String, default: Role.Admin
    }
 })

 module.exports = mongoose.model("User", userSchema);