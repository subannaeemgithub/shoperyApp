const express= require('express');
const { createProduct, getAllProducts, updateProduct, getProductById, deleteProduct } = require('../controllers/productController');
const router = express.Router();


router.post('/create',createProduct);
router.get('/',getAllProducts);
router.get('/product/:id',getProductById);
router.put('/update/:id',updateProduct);
router.delete('/delete/:id',deleteProduct);





module.exports=router;