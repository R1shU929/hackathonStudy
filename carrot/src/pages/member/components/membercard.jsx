import styled from "styled-components";
import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";


function MemberCard({props})
{
    const [rock, setRock] = useState(true);
    //삼항연산자 => 조건문 ? 참 : 거짓
    const onClickRockAndThumb = ()=>{
        setRock((e)=>!e)
    }
    
    return(
        <Wrapper>
            <Card>
            <Memberimg src={props.img} alt="" />
            <MemberName>
            {props.name}
            </MemberName>
            <MemberPart>
            {props.part}
            </MemberPart>
            {rock ? <FaRegHandRock onClick={onClickRockAndThumb}/>:<FaRegThumbsUp onClick={onClickRockAndThumb} /> 
            }
            </Card> 

        </Wrapper>
    );
}

const Card = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    

`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Memberimg = styled.img`
    width:150px;
    height: 150px;
    border-radius:100%;
`

const MemberName = styled.div`
    width:200px;
`
const MemberPart = styled.div`
    width:200px;
`
export default MemberCard;