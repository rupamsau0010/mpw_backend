import axios from "axios"

const instance = axios.create({
    baseURL: "https://iamrupam.herokuapp.com"
})

export default instance