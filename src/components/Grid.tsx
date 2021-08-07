import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Exercise } from '../types';

const Container = styled.div`
  padding: 1rem;
  
`;

const GridLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const GridItem = styled.div`
    width: 30%;
    font-size: .8rem;
    padding: 0.4rem;
    margin: 0.2rem;
    border: 0.0625rem solid #CCC;
    :hover {
        border: 0.0625rem solid #333;
        background-color: #e9e9e9;
        cursor: pointer;
    }
`;

type GridProps = {
    exercises: Exercise[],
    onSelect: (id: string) => void;
}

const NUMBER_TO_SHOW = 9;

const Grid = ({ exercises, onSelect }: GridProps) => {
    const [filtered, setFiltered] = useState<Exercise[] | []>([]);
    useEffect(() => {
        setFiltered(exercises.sort(() => 0.5 - Math.random())
            .slice(0, NUMBER_TO_SHOW))
    }, [exercises])

    return (
        <Container>
            <h1>{`Build Your Workout`}</h1>
            <div>Choose items from the menu to the left or get inspired to try something new with this random list below. </div>
            <GridLayout>
            {
                filtered                    
                    .map(e => {
                    return (
                        <GridItem key={e.id} onClick={() => onSelect(e.id)}>
                            <h3>{e.name}</h3>
                            <div>
                                {e.description}
                            </div>
                        </GridItem>
                    )
                })
            }
            </GridLayout>
        </Container>
    )
}

export default Grid;