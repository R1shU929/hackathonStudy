import React, { useState } from "react";
import styled from 'styled-components';
import List from './components/list';

function Home() {
  const [text, setText] = useState('');
  const [todos,SetTodos] = useState([]);

const onChangeInput = (e) => {
  setText(e.target.value);
};

const onChangeClick = () =>{
  const todoNew = {content: text}
  SetTodos([
    ...todos,todoNew
  ])
}
  return (
    <Box>
    <Wrapper>
    <h1>To Do List!</h1>
    <Search class="search-box" action="" method="get">
            <SearchBox onChange={onChangeInput} value={text} type='text' name='' placeholder='할 일 추가하기'/>
            <SearchBt onClick={onChangeClick} value="추가">
            </SearchBt>
        </Search>
    <List td={todos}/>
    <ListBt type="Button" value="할 일 확정"/>
    </Wrapper>
    </Box>
  );
}

export default Home;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
padding-top: 20px;
width:800px;
height: 600px;
background-color: #fdebee;
`;

const Box = styled.div`
  display:flex;
  justify-content: center;
`
const Search = styled.form`
  display: flex;
  margin-top: 20px;
`
const SearchBox = styled.input`
    border:0px;
    width:230px;
    height:40px;
    border-radius:6px;
    
    padding-left: 10px;
    padding-right:50px;
    background-color: rgba(0,0,0,0.05);
    font-size: 16px;
    &::placeholder{
        color: #8080809f
    }
    &:focus {outline: none;}
`

const SearchBt = styled.input`
    width:85px;
    height:40px;
    background-color: white;
    border: 1px solid rgba(107, 107, 107, 0.218);
    border-radius:4px;
    margin-left: 10px;
    font-size: 16px;
    padding-top:3px;
    cursor: pointer;
    &:hover{
        background-color:rgba(0, 0, 0, 0.034);
        transition:0.3s;
        color: #2a2a2ac3;
    }
`


const ListBt = styled.input`
    width:85px;
    height:40px;
    background-color: white;
    border: 1px solid rgba(107, 107, 107, 0.218);
    border-radius:4px;
    margin-left: 10px;
    margin-top: 250px;
    font-size: 16px;
    padding-top:3px;
    cursor: pointer;
    &:hover{
        background-color:rgba(0, 0, 0, 0.034);
        transition:0.3s;
        color: #2a2a2ac3;
    }
`