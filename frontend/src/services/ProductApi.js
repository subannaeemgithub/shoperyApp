import api from "./api";

// // GET ALL PRODUCTS
// export const getAllProducts = async () => {
//   const response = await api.get("/");
//   return response.data;
// };

//creating a function that is getting all products API
export const getAllProducts = async() => (await api.get('/')).data



//Get product by id
export const getProductById = async(id) => (await api.get(`/product/${id}`)).data
 // delete product by id 
 export const deleteProductById =async(id) =>(await api.delete(`/delete/${id}`)).data
 //add product
 export const addProduct =async(data)=>(await api.post(`/create`,data)).data
 //update
 export const updateProduct = async (id, data) =>(await api.put(`/update/${id}`, data)).data;