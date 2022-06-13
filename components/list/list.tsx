import { Button } from '@mui/material'
import {
    ListStyled,
    ListItem,
    Photo,
    Information,
    Description,
    Name,
} from './list.style'
import { Pet } from '../../data/@types/Pets'
import { TextService } from '../../data/services/TextService'


interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
    const maximumSizeText = 200;

    return (
        <ListStyled>
            {props.pets.map(pet => (
            <ListItem key={pet.id}>
            <Photo src={pet.photo} alt={pet.name} />
                <Information>
                    <Name>{pet.name}</Name>
                    <Description>
                        {TextService.limitText(pet.history, maximumSizeText)}
                    </Description>
                    <Button
                        variant={'contained'}
                        fullWidth
                         onClick = {() => props.onSelect(pet)}
                    >
                    Adotar {pet.name}
                    </Button>
                </Information>
            </ListItem>
            ))}
        </ListStyled>
    )
}