const express = require('express')
const mongoose = require('mongoose')
 require('dotenv').config()

const app = express()


mongoose.connect(process.env.URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connect to DB and listening on port  ", process.env.PORT);
    })
})
.catch((error) => console.log(error))

