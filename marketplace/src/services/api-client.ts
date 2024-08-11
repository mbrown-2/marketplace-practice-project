import axios from "axios";
import { defineConfig, loadEnv } from "vite"
// import connection from "./apikey"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.API_KEY
    }
})