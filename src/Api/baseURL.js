import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://e-commerce-store-app-backend.vercel.app/" })

export default baseUrl