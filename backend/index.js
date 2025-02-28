import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import Db_connect from "./config/Db_connect.js";
import mongoose from "mongoose";
import router from './route/clothRoutes.js'
import authRoutes from './route/authRoutes.js'
import cors from 'cors';
// config env
dotenv.config();
// rest object
const app = express()

// connect db
Db_connect()



// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors());
// Serve static files (for uploaded images)
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/clothsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



// rest api
app.get("/", (req, res) => {
    res.send({
        message: 'Welcome to Clothing App'
    })
})
// use the routes
app.use('/api/auth', authRoutes);
app.use('/api/cloths', router);
// port 
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
}
)