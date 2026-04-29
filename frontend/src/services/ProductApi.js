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