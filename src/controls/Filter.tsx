import React, {useRef} from 'react'
import styled from 'styled-components';

type FilterProps = {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    children: React.ReactNode
}

const Container = styled.div`    
    height: 2.5rem;
    width: 10rem;;
    background-color: black;
    width: 100%;
    display: flex;    
`;

const Input = styled.input`
    border: 0.0625rem solid white;
    background-color: black;
    color: white;
    margin: .25rem 0 .25rem .5rem;
    flex-grow: 1;
    outline-color: rgb(138, 242, 218);
`
const ClearButton = styled.button`
    cursor: pointer;
    border: 0.0625rem solid white;
    background-color: black;
    color: white;
    line-height: 0.5rem;
    margin: .25rem .5rem  .25rem -0.0625rem;
    :active {
        color: black;
        background-image: linear-gradient(90deg, rgb(138, 242, 218) 0%, rgb(128, 237, 243) 100%);
    }
    :hover {
        color: rgb(33,33,33);
    }
`;

const Filter = ({ onChange, value, onClear }: FilterProps) => {    
    return (
        <Container>
            <Input                
                placeholder="Filter..."
                onChange={(e) => onChange(e.target.value)}
                onKeyUp={(e) => {
                    if(e.key === "Escape") {
                        onChange("");                    
                    }
                }}
                value={value}
                tabIndex={-1}
            >
            </Input>
            <ClearButton
                onClick={onClear}
            >{`X`}</ClearButton>
        </Container>
    )
}

export default Filter;