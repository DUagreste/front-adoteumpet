import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'https://back-adoteumpet.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})