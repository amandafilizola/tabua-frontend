import axios from 'axios';
const url = 'https://tabua-backend.herokuapp.com';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
export default api