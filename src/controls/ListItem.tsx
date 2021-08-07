import React from 'react'
import styled from 'styled-components';
import { Exercise } from '../types';

type ListItemProps = {
    name: string;
    id: string; 
    onSelect: (id:string) => void;   
    selected: boolean;
}

type SelectedProps = {
    selected: boolean;
}

const Container = styled.div < SelectedProps>`
    border-bottom: 0.0625rem solid black;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    background-color: ${props => props.selected ? "#e9e9e9" : "white"};
    :hover {        
        background-image: linear-gradient(90deg, rgb(138, 242, 218) 0%, rgb(128, 237, 243) 100%);
    }
`;

const ListItem = ({name, id, onSelect, selected}:ListItemProps) => {
    
    return (
        <Container selected={selected} onClick={() => { onSelect(id) }}>
            {name}
        </Container>    
    )
}

export default ListItem;