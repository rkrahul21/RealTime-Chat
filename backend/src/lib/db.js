import mongoose from 'mongoose';
const { MONGODB_URI } = process.env;

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://webmatrix039:vEeFCePjWYBnQduK@chatappcluster.qzsgc.mongodb.net/chat_db?retryWrites=true&w=majority&appName=chatAppCluster");
        console.log(`MongoDB connection successful: ${connect.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed : " , error);
    }
}