import axios from "axios";

const frontApiSetup= axios.create({
    baseURL: import.meta.env.BASE_URL,
    Headers: {"Content-Type":"applicagtion/json"}
})

//adding he data of students
const AddingData =async (data)=> (await frontApiSetup.post('/api/product/adding',data)).data
// to see all students in ui
const ShowingAll = async ()=> (await frontApiSetup.get('/api/product/categories')).data
// getting the data of one signle student by its id
const ShowById = async (id)=> (await frontApiSetup.get(`/api/product/getData/${id}`)).data
// updating the student data by its id
const UpdateById = async (id,data)=> (await frontApiSetup.put(`/api/product/update/${id}`,data)).data
// Deleting the data by its Id
const deleting= async(id)=>(await frontApiSetup.put(`/api/product/delete/${id}`)).data