const mongoose = require('mongoose')


const categorieSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        minlength: [3, 'must adding name of minimum 3 words'],
        maxlength: [20, 'must adding name of maximum 20 words']
    },
    description: {
        type: String,
        minlength: [10, 'must adding description of minimum 10 words'],
        maxlength: [100, 'must adding description of maximum 100 words']
    },
}, { timestamps: true });

const Category = mongoose.model('Categories', categorieSchema);

module.exports = Category;