class API {
    apikey: string;

    constructor() {
        this.apikey = "9b997357cc814d958b30d84ea4633785";
    }
}

const connection = () => new API();

export default connection();