import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:9000"
    // baseURL: "https://short-video-backend.herokuapp.com"
    // baseURL: "https://short-video-app-mern-backend.herokuapp.com"
})

export default instance
