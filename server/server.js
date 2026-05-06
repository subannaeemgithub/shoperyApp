const express =require('express');
require('dotenv').config();
const cors =require('cors');
const connectDB = require("./config/db");
const Products =require('./routes/AppRoutes');
const rout = require('./routes/categoriesRoutes');



const app =express();
app.use('/upload',express.static('upload'))
connectDB();


app.use(express.json())
app.use(cors());


//products api calls
app.use('/api/products',Products)
// localhost:4000/api/products/adding
// localhost:4000/api/products/categories
// localhost:4000/api/products/getData/:id
// localhost:4000/api/products/update/:id
// localhost:4000/api/products/delete/:id

app.use('/api/products',rout)



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is connected and listening at port no "+ PORT)
})