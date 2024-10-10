import dotenv = require('dotenv');
dotenv.config();

import cors =require('cors');
import express= require('express');
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';

dbConnect();

const app = express();

app.use(express.json());

const corsOptions = {
    credentials: true,
    origin: ["http://localhost:4200"]
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use((req, res, next) => {
    console.log(`Received a ${req.method} request for ${req.url}`);
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Website served on http://localhost:${port}`);
});
