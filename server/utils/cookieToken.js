//here we are creating a cookie and sending it to the user //we are using the cookie to store the token

const cookieToken =(user, res)=>{
    
    const token =user.getJwtToken();

    const options={
        expires: new Date(Date.now()+ process.env.JWT_COOKIE_EXPIRES_TIME *24*60*60*1000),
        httpOnly:true, //to prevent cross site scripting attacks

    };

user.password = undefined;

    res.status(200).cookie("token", token ,options).json({
        success:true,
        token,
        user,
    });

}

module.exports=cookieToken;

