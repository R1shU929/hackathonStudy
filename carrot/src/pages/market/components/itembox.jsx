import styled from "styled-components";
import Itemimg from "../../../assets/anxiety.png"

function Itembox(){
    return(
        <Wrapper>
            <Item src={Itemimg} alt="bannerimg"/>
            <div>
                <ItemTitle>
                불안이
                </ItemTitle>
                <ItemPrice>
                <b>24,900원</b>
                </ItemPrice>
                <ItemAddress>
                혜윤도 행복시 핑크동
                </ItemAddress>
                <ItemChat>
                관심 29 . 채팅 116
                </ItemChat>
            </div>
        
        </Wrapper>
    );
}

const Wrapper = styled.div`
width:300px;
    cursor: pointer;
    display:flex;
    flex-direction: column;
`

const Item = styled.img`
    width:230px;
    height:230px;
    border-radius: 15px;
    margin-bottom: 5px;
`


const ItemTitle = styled.div`
margin-top: 5px;
`
const ItemPrice= styled.div`
margin-top: 5px;
`
const ItemAddress= styled.div`
font-size:13px;
margin-top: 5px;
`
const ItemChat= styled.div`
font-size:13px;
color:gray;
margin-top: 5px;
`

export default Itembox;