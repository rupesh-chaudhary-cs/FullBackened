import mongoose  from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";

const app=express();



(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        app.on("Error",(err)=>{
            console.log("Error:",err);
            throw err;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening at ${process.env.PORT}`);
        })
    }catch(err){
        console.log("Error:",err);
        throw err;
    }
})()