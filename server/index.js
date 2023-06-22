const express=require('express');
require('dotenv').config();
const bodyParser=require('body-parser');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const morgan=require('morgan');

const connectionWithDb=require('./config/dbConnection');


const app=express();

app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors());
app.use(cookieParser());
app.use(morgan('tiny'));

const PORT=process.env.PORT || 7000;


connectionWithDb();


const userRoute=require('./routes/userRoute');
app.use('/api/v1',userRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

