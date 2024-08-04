import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9b997357cc814d958b30d84ea4633785"
    }
})