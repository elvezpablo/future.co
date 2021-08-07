import React, { useRef } from 'react'
import styled from 'styled-components';
import Pill from "../controls/Pill";
import { Exercise } from '../types';

const Container = styled.div`
    padding: 1rem;    
    margin: 0;
`;

const Name = styled.h1`
    border-bottom: 0.0625rem solid black;
    margin: 0.5rem 0 1rem 0;
`;

const Video = styled.video`
    width: 40%;
    max-height: 30rem;
    min-height: 20rem;
    max-width: 30rem;
    cursor: pointer;
    background-color: black;
    border: 0.0625rem solid black;
`;

const GridLayout = styled.div`
    display: flex;    
`;

const GridItem = styled.div`
    width: 50%;
    flex-grow: 1;
    padding: .5rem;
`;

const DetailContainer = styled.div`
    margin: 0.125rem 0 0 0;
`;

const PillContainer = styled(DetailContainer)`
    display: flex;
`;

const Label = styled.h5`
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight:normal;    
    margin: 0 0.25rem 0 0;
`;

const Info = styled.div`
    font-size: 0.8rem;
    font-weight:normal;
    color: #666;
`;

const Description = styled.div`
    margin: 0.125rem 0 0 0;
    line-height: 1.8rem;
`;

const Information = (props: {label: string, text:string}) => {
    return (
        <li>
        <PillContainer>
            <Label>{props.label}</Label>
            <Info>{props.text}</Info>
        </PillContainer>
        </li>
    )
}

const Synonym = styled.div`
    color: rgba(200,200,200, 1);
    font-size: 1rem;
    line-height: 1.5rem;
`;

type DetailProps = Exercise;

const Detail = ({ name, video, synonyms, description, muscle_groups, movement_patterns, equipment_required, is_alternating}: DetailProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }
    return (
        <Container>
            <Name>{name} {synonyms && <Synonym>{synonyms}</Synonym>}</Name>
            <PillContainer>
                <Label>{`Muscle Groups: `}</Label>
                {muscle_groups?.split(",").map(m => <Pill key={m}>{m}</Pill>)}
            </PillContainer>
            <GridLayout>
                <GridItem>
                    <DetailContainer>{`Description`}</DetailContainer>
                    <Description>
                        {description}
                    </Description>
                    <ul>
                        {movement_patterns && (<Information label="Movement Pattern:" text={movement_patterns} />)}
                        {equipment_required && (<Information label="Equipment:" text={equipment_required} />)}
                        {is_alternating && (<Information label="Alternating:" text={is_alternating ? "Yes" : "No"} />)}
                    </ul>
                    
                </GridItem>
                {video && <Video onClick={handleVideoClick} ref={videoRef} src={video.url} />}
                
            </GridLayout>

        </Container>
    )
}

export default Detail;