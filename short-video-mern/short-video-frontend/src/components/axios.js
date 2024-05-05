import axios from 'axios'

const instance = axios.create({
    // baseURL: "http://localhost:9000"
    // baseURL: "https://short-video-backend.herokuapp.com"
    baseURL: "https://short-video-backend-mern-8d4b148ebccb.herokuapp.com"
})

export default instance
