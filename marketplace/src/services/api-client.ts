import axios from "axios";
import connection from "./apikey"
import process from "Vercel"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: process.env.apikey //connection.apikey
    }
})