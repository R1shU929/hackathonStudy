import styled from "styled-components";
function StoreIcon (){
    return(
        <Iconbox>
        <Icon type="Button" value="전체"/>
        <Icon type="Button" value="식당"/>
        <Icon type="Button" value="카페"/>
        <Icon type="Button" value="용달/이사"/>
        <Icon type="Button" value="뷰티/미용"/>
        <Icon type="Button" value="헬스/필라테스/요가"/>
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