import axios from 'axios';
const SERVER_URL = 'http://localhost:5000/api';

const registerUser = (data) =>{
    return axios.post(SERVER_URL+ "/auth/register",data)
}
const loginUser = (data) =>{
    return axios.post(SERVER_URL+"/auth/login",data)
}

const AuthServices ={
    registerUser,
    loginUser
}

export default AuthServices;