import styled from 'styled-components';

function Home() {
  return (
    <Wrapper>
      Hello World!
    </Wrapper>
  );
}

export default Home;


const Wrapper = styled.div`
font-size: 50px;
color: #ff8297;
height: 50vh;
background-color: beige;
display: flex;
align-items: center;
justify-content: center;
`;