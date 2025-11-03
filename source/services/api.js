import axios from "axios";

const API_BASE_URL = 'http://192.168.2.102:8080'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
})

export default api
