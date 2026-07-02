import mongoose , {Mongoose, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const subscriptionSchema=new mongoose.Schema({
    subscriber:{
        type:mongoose.Schema.Types.ObjectId,  // all the user subscribe on channel
        ref:"User",
    },
    channel:{
        type:mongoose.Schema.Types.ObjectId,  //channel is also user
        ref:"User",
    }

    
},{timestamps:true})

export const Subscriber=mongoose.model("Subscriber",subscriptionSchema)