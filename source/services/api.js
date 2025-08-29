import axios from "axios";
import { config } from "dotenv";
config()

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8081'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
})

export default api
