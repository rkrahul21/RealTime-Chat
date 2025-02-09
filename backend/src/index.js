import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import { connectDB } from './lib/db.js';


dotenv.config();
const app= express();   
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth" , authRoutes);
app.use("/api/message" , messageRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
    connectDB();
});