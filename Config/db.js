import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        
    const res = await mongoose.connect(process.env.DB_URL);
    //const res = await mongoose.connect('mongodb://localhost:27017')
    
        console.log("connection successful")
    }
    catch (err){

        console.log("error in connection", err)
    }
}