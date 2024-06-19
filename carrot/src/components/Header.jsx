import styled from 'styled-components'
import Logoimg from '../assets/logo.png'
import {Outlet} from 'react-router-dom'


function Header(){

    /**
     * 1. Head안에 왼쪽과 오른쪽으로 나눠서 
     * 2. display flex, justify-contents space between로 둘이 밀어서 만들자.
     */
    return (
        <>        
        <Wrapper>
    <Head>
        <HeadLeft>
        <Logo src={Logoimg} alt="logoimg"/>
        <Used>
            중고거래
        </Used>
        <Used>
            동네업체
        </Used>
        <Used>
            알바
        </Used>
        <Used>
            부동산
        </Used>
        <Used>
            중고차 직거래
        </Used>
        </HeadLeft>
        <Search class="search-box" action="" method="get">
            <SearchBox class="search-txt" type='text' name='' placeholder='물품이나 동네를 검색해보세요'/>
            <SearchBt type="Button" value="채팅하기">
            </SearchBt>
        </Search>
</Head>
</Wrapper>
<Outlet/>
</>

    );
}

export default Header;
const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position:sticky;
    background-color: white;
    top: 0;
`
const Head = styled.div`
    width:60vw;
    margin-top:15px;
    margin-bottom:15px;
    
    display: flex;
    justify-content: space-between;
`
const HeadLeft = styled.div`
    display: flex;  
    gap: 20px; //  Used 메뉴들 사이에 공간 넣어줌 
    align-items: center;
`
const Logo = styled.img`
    size: 40px;
`
const Used = styled.div`
color: #383838;
`
const Search = styled.form`
display: flex; 
`
const SearchBox = styled.input`
    border:0px;
    width:230px;
    height:40px;
    border-radius:6px;
    
    padding-left: 10px;
    padding-right:50px;
    background-color: rgba(0,0,0,0.05);
    font-size: 16px;
    &::placeholder{
        color: #8080809f
    }
    &:focus {outline: none;}
`

const SearchBt = styled.input`
    width:85px;
    height:40px;
    background-color: white;
    border: 1px solid rgba(107, 107, 107, 0.218);
    border-radius:4px;
    margin-left: 10px;
    font-size: 16px;
    padding-top:3px;
    cursor: pointer;
    &:hover{
        background-color:rgba(0, 0, 0, 0.034);
        transition:0.3s;
        color: #2a2a2ac3;
    }
`
