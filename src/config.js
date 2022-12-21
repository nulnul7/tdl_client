import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5501/5R2I/todo/'
})