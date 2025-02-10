import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connection successful: ${connect.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed : " , error);
    }
}