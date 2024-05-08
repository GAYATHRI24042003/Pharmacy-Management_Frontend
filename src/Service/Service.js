import axios from 'axios'
import { useParams } from 'react-router-dom';

const REST_API_BASE_URL='http://localhost:8080/api/users';

// export const listStudents = ()=> axios.get(REST_API_BASE_URL);

export const createUser = (user) => axios.post(REST_API_BASE_URL,user);

// export const getStudent = (studentId) => axios.get(REST_API_BASE_URL+'/id/'+userId)
export const findByemail = (email) => axios.get(REST_API_BASE_URL+'/email/'+email)

export const updateUser = (mail,user) => axios.put(REST_API_BASE_URL+'/'+mail,user)


// export const deleteStudent = (studentId) => axios.delete(REST_API_BASE_URL+'/'+studentId)