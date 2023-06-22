const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter your name'],
        maxLength:[30, 'Your name cannot exceed 30 characters'],
        minLength:[3, 'Your name must be at least 3 characters long'],
        trim:true,
    },
    email:{
        type:String,
        required:[true, 'Please enter your email'],
        unique:true,
        validate:[validator.isEmail, 'Please enter valid email address'],
    },
    password:{
        type:String,
        required:[true, 'Please enter your password'],
        minLength:[5, 'Your password must be longer than 5 characters'],
        select:false // this will not show the password when we get the user
    },
    // avatar:{
    //     public_id:{
    //         type:String,
    //         required:true
    //     },
    //     url:{
    //         type:String,
    //         required:true
    //     }
    // },
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

    forgotPasswordToken: String, 
    forgotPasswordExpiry: Date,

});


// Encrypting password before saving user
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
});


// Compare user password
userSchema.methods.isValidatedPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


// Create and return JWT token
userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    });
}

// Generate password reset token
userSchema.methods.getForgotPasswordToken=function(){
    const resetToken=crypto.randomBytes(20).toString('hex');     // Generate token
    this.forgotPasswordToken=crypto.createHash('sha256').update(resetToken).digest('hex');   // Hash and set to resetPasswordToken
    this.forgotPasswordExpiry=Date.now()+30*60*1000;     // Set token expire time

    return resetToken;
}



module.exports=mongoose.model('User',userSchema);




