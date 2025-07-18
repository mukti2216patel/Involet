const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:true,
    },
    email:{
        type:String , 
        required:true,
    },
    password:{
        type:String , 
        required:true,
    },
    createdAt:{
        type:Date , 
        default:Date.now,
    },
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password , 10);
}

module.exports = mongoose.model('userModel' , userSchema);