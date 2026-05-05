const Category = require('../models/categorieSchema');


//api for adding the data or infprmation (as admin)
// localhost:4000/api/product/adding
const addingData = async (req, res) => {
  try {
    const { title, img  } = req.body;
    
    if (!title || !img) {
      return res.status(400).json({
        success: false,
        message: "Title and Image are required!"
      });
    }

    const addingQuery = await Category.create({ title, img });

    if (!addingQuery) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong, data was not entered!"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data entered successfully!",
      result: addingQuery
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong with the query setup!",
      error: e.message
    });
  }
};

// this is the api for showing the data in screen
// localhost:4000/api/product/categories
const catigoriesApi = async (req, res) => {
  console.log("Categories API called...");
  try {
    const categoriesData = await Category.find();
    console.log("Data fetched from DB:", categoriesData);

    if (!categoriesData || categoriesData.length === 0) {
      console.log("No categories found in database.");
      return res.status(200).json({
        success: true,
        message: "No categories found in database, but the query worked.",
        result: []
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Categories are there...",
      result: categoriesData,
    });
  } catch (e) {
    console.error("Error in Categories API:", e.message);
    return res.status(500).json({
      success: false,
      message: "Something wrong with the Query",
      error: e.message
    });
  }
};

;
//checking or getting the data of card by id's id
// localhost:4000/api/product/getData/:id
const getById = async (req, res) => {
  try {
    const id = req.params.id;

    const databyId = await Category.findById(id);

    if (!databyId) {
      return res.status(404).json({
        success: false,
        message: "No data found for this ID!"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Here is the data!",
      result: databyId
    });

  } catch (e) {

    if (e.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format!"
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: e.message
    });
  }
};

// this is the api for updating the data into cart privius information


const updateApi = async (req, res) => {
  try {
    const { title, img } = req.body;
    const id = req.params.id;

    // 1. Correct order: findByIdAndUpdate(id, data, options)
    const updateQuery = await Category.findByIdAndUpdate(
      id,
      { title, img },
      { new: true, runValidators: true }
      { new: true}
    );

    if (!updateQuery) {
      return res.status(404).json({
        success: false,
        message: 'Category not found!'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Category updated successfully!',
      result: updateQuery
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Error updating category!',
      error: e.message
    });
  }
}

const deletApi = async (req, res) => {
  try {
    const id = req.params.id;
    const deletQuery = await Category.findByIdAndDelete(id);

    if (!deletQuery) {
      return res.status(404).json({
        success: false,
        message: "Category not found, could not delete!"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully!"
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong with the delete query!",
      error: e.message
    });
  }
}

module.exports = { addingData,catigoriesApi,getById,updateApi,deletApi };
