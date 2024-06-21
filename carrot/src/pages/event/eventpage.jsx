import React, { useState } from "react";
import styled from "styled-components";

function EventPage(){
    const SearchBox = (e) => {
        console.log(e.target.value);
    };

    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount (prevCount=> prevCount+1);
    }
    const onDecrease = () => {
        setCount (prevCount=> prevCount-1);
    }
    const reset = () =>
    {
        console.log('reset 실행중이니 ㅜㅜㄴ')
        setCount (0);
    }
    return(
        <Clicky>
        <button onClick={()=>{alert("버튼 클릭하셨네요?")}}> 버튼</button>
        <input type="text" onChange={SearchBox} />
        <Counter>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={reset}>0으로 초기화</button>
        </Counter>
        </Clicky>
    )
}

const Clicky = styled.div `
display: flex;
justify-content: center;
margin-top: 100px;
align-items: center;
justify-content: space-around;
`
const Counter = styled.div`
    
`
export default EventPage;