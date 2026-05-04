const Product =require('../models/productModel');
const mongoose = require("mongoose");


// create product
const createProduct = async (req, res) => {
  try {
    const { name, description,price,category,inStock,quantity,image} = req.body;

    // validation
    if (!name ||!description ||!price ||!category ||inStock == null||quantity == null) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const product = await Product.create(
        {name,description,price,category,inStock,quantity, image}
    );

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // check empty array
    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products found successfully",
      data: products
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// get product by id
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    // 1. check id format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID"
      });
    }

    // 2. find product
    const product = await Product.findById(id);

    // 3. check if exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // 4. success response
    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};


//get product by id and update
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // 1. id format check
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format"
      });
    }

    // 2. Remove _id from body if it exists to prevent immutable field error
    const updateData = { ...req.body };
    delete updateData._id;

    // 3. update (returns the new object)
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error.message
    });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // 1. check id format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID"
      });
    }

    // 2. check if product exists
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // 3. delete product
    await Product.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

module.exports={getAllProducts,createProduct,getProductById,updateProduct,deleteProduct}