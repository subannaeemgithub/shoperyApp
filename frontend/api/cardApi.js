import axios from "axios";

const frontApiSetup = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
    headers: { "Content-Type": "application/json" }
})

//adding he data of students
export const AddingData =async (data)=> (await frontApiSetup.post('/api/products/adding',data)).data
// to see all students in ui
export const ShowingAll = async ()=> (await frontApiSetup.get('/api/products/categories')).data
// getting the data of one signle student by its id
export const ShowById = async (id)=> (await frontApiSetup.get(`/api/products/getData/${id}`)).data
// updating the student data by its id
export const UpdateById = async (id,data)=> (await frontApiSetup.put(`/api/products/update/${id}`,data)).data
// Deleting the data by its Id
export const deleting = async (id) => (await frontApiSetup.delete(`/api/products/delete/${id}`)).data