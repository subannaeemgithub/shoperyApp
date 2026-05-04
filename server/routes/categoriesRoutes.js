const express = require('express');
const { catigoriesApi, addingData, getById, updateApi,deletApi } = require('../controllers/categoriesControl');

const rout = express.Router();

rout.post('/adding',addingData)
rout.get('/categories', catigoriesApi);
rout.get('/getData/:id', getById);
rout.put('/update/:id', updateApi);
rout.delete('/delete/:id', deletApi)


module.exports = rout;