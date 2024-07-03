import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

function Order(){
    return(
        <Wrapper>
        <OrderBar>
        <SlArrowDown className="arrow"/>
        </OrderBar>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width:100wh;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const OrderBar = styled.div`
    margin-top:40px;
    width:500px;
    height: 50px;
    border-radius: 14px;
    background-color: #FFF9C6;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07);
    display: flex;
    justify-content: end;
    align-items: center;

    .arrow{
        margin-right: 30px;
    }
`
export default Order;