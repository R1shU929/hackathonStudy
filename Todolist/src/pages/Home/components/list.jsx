import styled from "styled-components";

function List ({td}) {
    console.log(td);
    return(
        <Wrapper>
            {td.map((todo,idx)=>{
                return<li key={idx}>{todo.content}</li>
            })}
            {/* <ol>
                <Num>빨래<DeleteBt type="Button" value="삭제"/></Num>
                <Num>청소<DeleteBt type="Button" value="삭제"/></Num>
                <Num>코딩<DeleteBt type="Button" value="삭제"/></Num>
            </ol> */}
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
const Num = styled.li`
    display: flex;
`
