import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'http://back-adoteumpet.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})