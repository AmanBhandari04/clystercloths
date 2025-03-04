import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import Db_connect from "./config/Db_connect.js";
import mongoose from "mongoose";
import router from './route/clothRoutes.js'
import authRoutes from './route/authRoutes.js'
import cors from 'cors';
import path from 'path';

// config env
dotenv.config();
// rest object
const app = express()

// connect db
Db_connect()



// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors());
// Serve static files (for uploaded images)
app.use('/uploads', express.static('uploads'));




// Serve frontend build files
const __dirname = path.resolve();
console.log(__dirname)
app.use(express.static(path.join(__dirname, "../my-react-app/dist")));
app.use('/api/auth', authRoutes);
app.use('/api/cloths', router);




// rest api
// app.get("/", (req, res) => {
//     res.send({
//         message: 'Welcome to Clothing App'
//     })
// })
// use the routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../my-react-app/dist", "index.html"));
});
// port 
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
}
)