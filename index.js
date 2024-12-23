import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { contactRoutes } from './routes/contactRoutes.js';

const app = express();
dotenv.config();
app.use(express.json());

// Middleware
app.use(cors());
app.use('/contact',contactRoutes)


app.get('/',(req , res)=>{
    res.send('WELCOME TO BACKEND');
})











const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI

const dbConnection = async()=>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("db connected succesfully")
    }
    catch(error){
        console.log("db is not connected",error)
    }
}
dbConnection();


app.listen(PORT, () => {
  console.log(`Server runing on Port ${PORT}`);
});





