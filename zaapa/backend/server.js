const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRoute');
const roadSignRouter = require('./Routes/roadSignRoute')
const roadStateRouter = require('./Routes/roadStateRoute')
const roadSignPositionRouter = require('./Routes/roadSignMarkerRoute')
const roadStatePositionRouter = require('./Routes/roadStateMarkerRoute')
require('dotenv').config();

const app = express();
app.use(express.json()); 

app.use('/api/user', userRouter);
app.use('/api/roadsigns',roadSignRouter)
app.use('/api/roadstate',roadStateRouter)
app.use('/api/roadsignposition',roadSignPositionRouter)
app.use('/api/roadstateposition',roadStatePositionRouter)

mongoose.connect(process.env.URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB and listening on port", process.env.PORT);
    });
})
.catch((error) => console.log(error));
