import React from 'react';
import './App.css';
import { Box } from './components/styled/Box.styled';
import { Image, Text, Title } from './components/styled/Card.styled';
import { Btn } from './components/styled/Button.styled';
import photo from './components/images/Rectangle1.jpg'
import { myTheme } from './components/styled/Theme.styled';

function App() {
  return (
    <div className="App">
      <Box>
          <Image src={myTheme.urlImg.photo}/>
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
          <Btn>See more</Btn>
          <Btn>Save</Btn>
      </Box>
    </div>
  );
}

export default App;
