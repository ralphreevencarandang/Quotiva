import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.allorigins.win/get?url=https://zenquotes.io/api',
});

export default instance;