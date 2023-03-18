import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB connected to ${conn.connection.name} database`);
    }catch(error){
        console.log('Error connecting to the MongoDB database', error.message);
        process.exit(1);
    }
}