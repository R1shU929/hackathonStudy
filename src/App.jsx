import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      Hello World!
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
font-size: 50px;
color: #ff8297;
height: 50vh;
background-color: beige;
display: flex;
align-items: center;
justify-content: center;
`;
