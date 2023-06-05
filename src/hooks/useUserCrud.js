import { useState } from 'react'
import axios from 'axios'

const useUserCrud = () => {
    const [ users, setUsers ] = useState()

    //const url = 'https://users-crud.academlo.tech/users/'
    const url = "https://user-crud-test-ob10.onrender.com/api/v1"
    //const url = "http://localhost:8080/api/v1"
    // GET
    const getAllUsers = () => {
        axios.get(`${url}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    // POST
    const createNewUser = data => {
        axios.post(`${url}/users`, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    // DELETE
    const deleteUserById = id => {
        const urlDelete = `${url}/users/${id}`
        axios.delete(urlDelete)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    // UPDATE
    const updateUserById = (id, data) => {
        const urlUpdate = `${url}/users/${id}`
        axios.put(urlUpdate, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }
    return { users, getAllUsers, createNewUser, deleteUserById, updateUserById }
}

export default useUserCrud