import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export default axios.create({baseURL:BASE_URL});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' ,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Accept': 'application/json'
},
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    timeout: 30000,
    withCredentials: true
});