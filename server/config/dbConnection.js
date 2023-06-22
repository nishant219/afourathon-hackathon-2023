const mongoose=require("mongoose");
require('dotenv').config();

const connectionWithDb=()=>{
    mongoose
    .connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log(`__DB Connected Successfully__`))
    .catch((error)=>{
        console.log(`Issue while connecting with DB`)
        console.log(error);
        process.exit(1);
    });
};

module.exports =connectionWithDb;