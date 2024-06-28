import React, { useState } from "react";
import styled from 'styled-components';
import List from './components/list';

function Home() {
  const [text, setText] = useState(''); // 인풋 value 값 저장
  const [todos,SetTodos] = useState([]); // 실제 데이터 값 저장

const onChangeInput = (e) => {
  //onChange는 input값넣을때마가 실행됨
  setText(e.target.value); // 
};

const onClickAdd = () =>{
  if(text.trim() === '') return //얼리리턴은 함수 나가버림 그냥 뒤에 코드는 무시함
  //trim은 그 문자열의 공백을 싹 없애준다. 즉 's t r i n g' => 's t r i n g'.trim() => 'string'

  
  const todoNew = {content: text}
  console.log(...todos)

  SetTodos([
    ...todos,todoNew
  ])
  setText("");
  
}
 const onClickConfirm = () => {
 alert(todos.map((en)=>{ // en 이라고 이름 붙인 객체를 map. 즉 반복하겠다 !
 return en.content
 }))
 }
  return (
    <Box>
    <Wrapper>
    <h1>To Do List!</h1>
    <Search class="search-box" action="" method="get">
            <SearchBox onChange={onChangeInput} value={text} type='text' name='' placeholder='할 일 추가하기'/>
            <SearchBt onClick={onClickAdd} value="추가">
            </SearchBt>
        </Search>
    
    <List todos={todos} SetTodos={SetTodos}/> 
    {/* 
      prop는 왼쪽은 보내는 이름 , 오른쪽은 보낼 값 이런 형식
    */}
    <ListBt onClick={onClickConfirm} type="Button" value="할 일 확정"/>
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