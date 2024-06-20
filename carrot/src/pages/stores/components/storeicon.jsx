import styled from "styled-components";
import Storebox from "./storebox";
function StoreIcon (){
    const IconArr = ["전체","식당","카페","용달/이사","뷰티/미용","헬스/필라테스/요가"];
    return(
        <Iconbox>
        {
            IconArr.map((yoon)=><Icon type="Button" value={yoon} key={yoon}/>
            // key는 웹사이트에서 알아보려고 넣는 값
        )
            }
        </Iconbox>
    );
}

const Icon = styled.input`
    padding: 0 15px;
    height:35px;
    background-color: white;
    border: 1px solid rgba(107, 107, 107, 0.218);
    border-radius:30px;
    margin-left: 10px;
    font-size: 14px;
    padding-top:3px;
    cursor: pointer;
    &:hover{
        background-color:rgba(0, 0, 0, 0.034);
        transition:0.3s;
        color: #2a2a2ac3;
    }
`
const Iconbox = styled.div`
    width:550px;
`
export default StoreIcon;