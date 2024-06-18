const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRoute');
const roadSignRouter = require('./Routes/roadSignRoute')
const roadStateRouter = require('./Routes/roadStateRoute')
require('dotenv').config();

const app = express();
app.use(express.json()); // Fix: Call express.json() as a function

app.use('/api/user', userRouter);
app.use('/api/roadsigns',roadSignRouter)
app.use('/api/roadstate',roadStateRouter)

mongoose.connect(process.env.URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB and listening on port", process.env.PORT);
    });
})
.catch((error) => console.log(error));
