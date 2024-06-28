import styled from "styled-components";

function List ({todos, SetTodos}) {
    //props td라는 이름과 SetTodos라는 이름으로 props가 왔다. 그거를 처음에 항상 중괄호로 받아준다.

    const onClickDelete =(props)=>{
        const tdFilter = todos.filter((todos)=> todos.content !== props)
        SetTodos(tdFilter)
   
    }
    return(
        <Wrapper>
            {todos.map((todo,idx)=>{
                return<li key={idx}>{todo.content}<DeleteBt type="Button" onClick={()=>onClickDelete(todo.content)} value="삭제"/></li>
            })}
        </Wrapper>
    )
}

export default List;

const Wrapper = styled.div`
    margin-top: 40px;
    width:44%;
    font-size: 20px;
`
const DeleteBt = styled.input`
    margin-left: 10px;
    margin-top: 0;
`
