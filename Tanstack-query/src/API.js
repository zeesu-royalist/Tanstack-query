import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const fetchPost = async () => {
    const res = await api.get('/posts')   // end point
    return res.data
}
