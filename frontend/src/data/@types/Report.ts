import { Pet } from "./Pets";

export interface Report{
    id:number;
    email: string;
    amount: string;
    pet: Pet;
}