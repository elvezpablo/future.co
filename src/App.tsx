import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import queryString from "query-string";
// TODO clean up by collapsing into one index 
import Header from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";
import List from "./components/List";
import Grid from "./components/Grid";
import Detail from "./components/Detail";
import Filter from "./controls/Filter";
import ListItem from "./controls/ListItem";
import exercises from './data/exercises.json';
import { Exercise } from './types';

const AppContainer = styled.div``;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const BackButton = styled.button`
    cursor: pointer;
    border: 0.0625rem solid black;
    background-color: white;
    color: black;
    line-height: 1.5rem;
    margin: .25rem .5rem  ;
    :active {
        color: black;
        background-image: linear-gradient(90deg, rgb(138, 242, 218) 0%, rgb(128, 237, 243) 100%);
    }
    :hover {
        color: rgb(33,33,33)''
    }
`;

function App() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<Exercise | undefined>();

  const handleFilterChange = (value: string) => {
    setFilter(value);
  }

  const handleClear = () => {
    setFilter("");
  }

  const handleItemSelect = (id: string) => {
    const [e] = exercises.filter(e => e.id === id);
    setSelected(e);
  }

  const handleBackClick = () => {
    setSelected(undefined);
  }

  useEffect(() => {
    // TODO: could elaborate on this and update the path on all navigation events but outta time ;)
    const params = queryString.parse(location.search);
    if(params.eid) {
      const results = exercises.filter(e => e.id === params.eid);
      if (results.length) {
        setSelected(results[0]);
      }            
    }
  },[]);

  return (
    <AppContainer>
      <Header />
      <Body>
        <Menu>
          <Filter value={filter} onChange={handleFilterChange} onClear={handleClear} >{`Filter`}</Filter>
          <List>
            {exercises
              .filter(({ name }) => {
                return name.toLowerCase().includes(filter.toLowerCase())
              }).map(({ id, name }) =>
                <ListItem
                  key={id}
                  id={id}
                  name={name}
                  selected={typeof selected !== "undefined" && selected && selected.id === id}
                  onSelect={handleItemSelect}
                />)}
          </List>
        </Menu>
        <Content>
          {selected ? (
            <>
              <Detail {...selected} />
              <BackButton onClick={handleBackClick}>{`<<`}</BackButton>
            </>
          )
            : (
              <Grid exercises={exercises} onSelect={handleItemSelect} />
            )}
        </Content>
      </Body>
    </AppContainer>
  )
}

export default App
