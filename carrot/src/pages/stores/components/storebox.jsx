import styled from "styled-components";
import Foximg from "../../../assets/fox.png";

function Storebox(
    {props}
){
    console.log(props.title);
    return(
        <Container>
        <Wrapper>
            <Profile src={Foximg} alt="Profileimg"/>
            <Storewd>
                <StoreWrap>
                <StoreName>{props.title}</StoreName>
                <StoreAddress>{props.place} </StoreAddress>
                </StoreWrap>
                <StoreExplain> {props.contents}
                    </StoreExplain>
                <StoreCategory> {props.review}
                    </StoreCategory>
            </Storewd>
        </Wrapper>
        </Container>
    );
}
const Container=styled.div`
    padding:15px 0;
    
    border-bottom: 1px solid #8080801c;
`
const Wrapper = styled.div`
    width: 320px;
    height:100px;
    display: flex;
    justify-content: center;
    padding: 15px;
    cursor:pointer;
    &:hover{
        background-color: #8080801c;;
    }
  

    
`
const Profile = styled.img`
    background-color: #ffd07163;
    width: 100px;
    border-radius:100%;
`
const Storewd = styled.div`
    width:200px;

`
const StoreWrap = styled.div`
    width:220px;
    display: flex;
`
const StoreName = styled.h3`
    margin-left: 10px;
    width:200px;
    padding-top: 4px;
`
const StoreAddress = styled.div`
    font-size:13px;
    width:40px;
    padding-top: 6px;
    color:gray;
`
const StoreExplain = styled.div`
    font-size: 18px;
    margin-left: 10px;
    margin-top: 3px;
`
const StoreCategory = styled.div`
    font-size:13px;
    color:gray;
    margin-left: 10px;
    margin-top: 3px;
`

export default Storebox;