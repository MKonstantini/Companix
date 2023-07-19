import axios from "axios";
import User from "../interfaces/User";
import { useEffect, useState } from "react";
const dbUrl : string = `${process.env.REACT_APP_API}/users`;


export function getAll() {
    return axios.get(dbUrl)
}

export function getUserByEmail(email: string, password: string) {
    return axios.get(`${dbUrl}?email=${email}&password=${password}`)
}

export function useFetch(field:string) {
let [user, setUser] = useState<any>()
useEffect(() => {
    axios.get(`${dbUrl}/${field}`)
    .then((res) => res.data)
    .then((data) => setUser(data))
    .catch((err) => console.log(err))
}, [])
return (user)
}


export function addUser(user : User) {
    return axios.post(dbUrl, user)
}

export function deleteUser(userId : string) {
    return axios.delete(`${dbUrl}/${userId}`)
}


