const express = require('express');
const app = express();
const cors =require ('cors');
app.use(express.json());
app.use(cors());
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authroutes');
const ToDoRoutes = require('./routes/ToDoRoutes');
const PORT = process.env.PORT || 5000

app.use("/api/auth", require("./routes/authroutes"));
app.use('/api/todo',require("./routes/ToDoRoutes"))
mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("Db connected");
}).catch(err=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});