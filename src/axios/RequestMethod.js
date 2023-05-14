import axios from "axios"

const BASE_URL = "http://localhost:8800"

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,

})