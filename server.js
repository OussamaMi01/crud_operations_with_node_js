import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import { connect } from "./config/connect.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);


app.listen(3000,()=>{
    connect();
    console.log('server is running on port 3000');
});   