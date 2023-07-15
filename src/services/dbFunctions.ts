import axios from "axios";
import User from "../interfaces/User";
const dbUrl : string = `${process.env.REACT_APP_API}/users`;


// Get all from db
export function getAll() {
    return axios.get(dbUrl)
}

export function getUser(email: string, password: string) {
    return axios.get(`${dbUrl}?email=${email}&password=${password}`)
}

export function addUser(user : User) {
    return axios.post(dbUrl, user)
}

export function deleteUser(userId : string) {
    return axios.delete(`${dbUrl}/${userId}`)
}


