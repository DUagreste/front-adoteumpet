import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pets';
import { ApiService } from '../../services/ApiService';

export function useIndex(){
    const [listPets, setListPets] = useState<Pet[]>([]),

        [petSelected, setPetSelected] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [amount, setAmount] = useState(''),
        [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((response) => {
                setListPets(response.data)
            })
    },[])

    useEffect(() => {
        if(petSelected === null){
            clearForm();
        }
    }, [petSelected])
    
    function adopt(){
        if(petSelected !== null){
            if(validateDataAdopt()){
                ApiService.post('/adoptions', {
                    pet_id: petSelected.id,
                    email,
                    amount
                })
                    .then(() => {
                        setPetSelected(null);
                        setMessage('Pet adotado com sucesso!');
                    })
                    .catch((error: AxiosError<any>) => {
                        setMessage(error.response?.data.message);
                    })
            } else {
                setMessage('Preencha todos os dados corretamente.')
            }
        }
    }

    function validateDataAdopt(){
        return email.length > 0 && amount.length > 0
    }

    function clearForm(){
        setEmail('');
        setAmount('');
    }

    return{
        listPets,
        petSelected,
        setPetSelected,
        email,
        setEmail,
        amount,
        setAmount,
        message,
        setMessage,
        adopt
    };
}