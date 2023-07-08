const Elective =require('../models/electiveModel');
const BigPromise=require("../middlewares/bigPromise");
const User=require('../models/userModel');
const customError=require('../utils/customError');


//add elective
exports.addElective=BigPromise(async(req,res,next)=>{
    const {subject,description,code}=req.body;
    const user=req.user.id;  //from cookieToken  //req.user.id is the id of the user who is logged in 
    if(!subject || !description || !code){
        return next(new customError("Please provide subject, description & code",400));
    }

    const newElective=await Elective.create({
        subject,
        description,
        code,
        user
    });
    res.status(200).json({
        success:true,
        data:newElective
    });
}
);


//get all electives
exports.getAllElectives=BigPromise(async(req,res,next)=>{
    const electives=await Elective.find();
    res.status(200).json({
        success:true,
        data:electives
    });
}
);


//get elective by id
exports.getElective=BigPromise(async(req,res,next)=>{
    const elective=await Elective.findById(req.params.id);
    if(!elective){
        return next(new customError(`No elective found with id ${req.params.id}`,404));
    }
    res.status(200).json({
        success:true,
        data:elective
    });
}
);

//delete elective by id
exports.deleteElective=BigPromise(async(req,res,next)=>{
    const elective=await Elective.findById(req.params.id);
    if(!elective){
        return next(new customError(`No elective found with id ${req.params.id}`,404));
    }
    if(elective.user.toString()!==req.user.id){
        return next(new customError(`User ${req.user.id} is not authorized to delete this elective`,401));
    }

    await Elective.findByIdAndRemove(req.params.id);

    res.status(200).json({
        success:true,
        data:{}
    });
}
);


//update elective by id
exports.updateElective=BigPromise(async(req,res,next)=>{
    let elective=await Elective.findById(req.params.id);
    if(!elective){
        return next(new customError(`No elective found with id ${req.params.id}`,404));
    }
    if(elective.user.toString()!==req.user.id){
        return next(new customError(`User ${req.user.id} is not authorized to update this elective`,401));
    }

    elective=await Elective.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });

    res.status(200).json({
        success:true,
        data:elective
    });
}
);









