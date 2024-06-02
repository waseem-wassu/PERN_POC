import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express()

const PORT = process.env.PORT 

app.get("/",async(req,res) => {
    res.status(200).json({status:1,message:"Welcome to our Ecommerce community"})
})

app.listen(PORT,()=> {
    console.log(`The server is running on ${PORT}`);
})