const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

const mongoose = require("mongoose");
mongoose.connect(process.env.CONN_STRING);
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("database connection set");
})

const usersRouter = require("./routes/users");
app.use('/users/', usersRouter);

const stripeRouter = require("./routes/stripeRouter");
app.use('/stripe/', stripeRouter);

app.listen(port, () => {
    console.log("server started");
} )