const User=require('../models/userModel');
const BigPromise=require("../middlewares/bigPromise");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const crypto=require('crypto');
const fileUpload=require("express-fileupload");

const customError=require('../utils/customError');
const cookieToken=require('../utils/cookieToken');
const emailHelper=require('../utils/emailHelper');


//signup
exports.signup=BigPromise(async(req,res,next)=>{

    const {name,email,password}=req.body;

    const user = await User.findOne({ email }).select("+password");
    if(user){
        return next(new customError("User already exists with same email",400));
    }
    
    if(!email || !password || !name){
        return next(new customError("Please provide email, name & password",400));
    }

    const newUser=await User.create({
        name,
        email,
        password
    });

    cookieToken(newUser,res);

});



//login
exports.login=BigPromise(async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email || !password){
        return next(new customError("Please provide email & password",400));
    }

    //as we have designed schema select:false we have to provide +password explicitely
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new customError("You are not registered in the db", 400));
    }
    //now, user present in db, so check pass with the help of methods in userModel
    const isPasswordCorrect=await user.isValidatedPassword(password);
    if(!isPasswordCorrect){
        return next(new customError("Invalid email or password",401));
    }

    cookieToken(user,res);
})
    

//logout
exports.logout=BigPromise(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });
    res.status(200).json({
        success:true,
        message:"Logged out successfully"
    });
})

