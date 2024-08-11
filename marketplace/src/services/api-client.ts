import axios from "axios";
// import connection from "./apikey"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: `${process.env.API_TOKEN}` //connection.apikey
    }
})