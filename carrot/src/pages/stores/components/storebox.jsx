import styled from "styled-components";
import Foximg from "../../../assets/fox.png";

function Storebox(){
    return(
        <Container>
        <Wrapper>
            <Profile src={Foximg} alt="Profileimg"/>
            <Storewd>
                <StoreWrap>
                <StoreName>팍스의 연애상담소</StoreName>
                <StoreAddress>사랑동 </StoreAddress>
                </StoreWrap>
                <StoreExplain> 칭구들 모든 고민 다 들어주게쏘!
                    </StoreExplain>
                <StoreCategory> 후기 100 . 단골 185 . 고민상담
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
    width:200px;
    display: flex;
`
const StoreName = styled.h3`
    margin-left: 10px;
    width:140px;
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