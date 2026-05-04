const express =require('express');
require('dotenv').config();
const cors =require('cors');
const connectDB = require("./config/db");
const Products =require('./routes/AppRoutes');
const rout = require('./routes/categoriesRoutes');



const app =express();
connectDB();


app.use(express.json())
app.use(cors());


//products api calls
app.use('/api/products',Products)
// localhost:4000/api/product/adding
// localhost:4000/api/product/categories
// localhost:4000/api/product/getData/:id
// localhost:4000/api/product/update/:id
// localhost:4000/api/product/delete/:id

app.use('/api/product',rout)



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is connected and listening at port no "+ PORT)
})