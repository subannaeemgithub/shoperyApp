const express =require('express');
require('dotenv').config();
const cors =require('cors');
const connectDB = require("./config/db");
const Products =require('./routes/AppRoutes')

const app =express();
connectDB();


app.use(express.json())
app.use(cors());


//products api calls
app.use('/api/products',Products)



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is connected and listening at port no "+ PORT)
})