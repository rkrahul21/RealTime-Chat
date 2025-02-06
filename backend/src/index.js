import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './lib/db.js';


dotenv.config();
const app= express();   
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" , authRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
    connectDB();
});