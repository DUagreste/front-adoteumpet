import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'back-adoteumpet.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})