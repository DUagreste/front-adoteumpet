import { useState } from "react";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useRegister(){
    const [name, setName] = useState(''),
        [history, setHistory] = useState(''),
        [photo, setPhoto] = useState(''),
        [message, setMessage] = useState('');


    function register(){
        if(validateForm()){
            ApiService.post('/pets', {
                name,
                history,
                photo
            })
                .then(() => {
                    clean();
                    setMessage('Pet cadastrado com sucesso!')
                })
                .catch((error: AxiosError<any>) => {
                    setMessage(error.response?.data.message);
                })
        } else {
            setMessage('Preencha todos os campos corretamente!')
        }
    }

    function validateForm(){
        return name.length > 2 && history.length > 20 && photo.length > 2
    }

    function clean(){
        setName('');
        setHistory('');
        setPhoto('');
    }

    return {
        name,
        history,
        photo,
        message,
        setName,
        setHistory,
        setPhoto,
        setMessage,
        register,
    }
}