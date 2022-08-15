import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://api.github.com/users",
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "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"
    },
    mode: 'no-cors',
    
}) 

export default axiosConfig;