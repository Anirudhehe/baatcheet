import mongoose from "mongoose";

// connect to mongodb atlas 

export const connectDB = async()=>{
    try {
        mongoose.connection.on('connected',()=>{
            console.log("connected to mongodb atlas");
        })
       await mongoose.connect(`${process.env.MONGODB_URI}/baatcheet`) 
    } catch (error) {
        console.log("Error in the DB connection: ",error)
    }
}