import styled from 'styled-components'
import Logoimg from '../assets/logo.png'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'


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
        <Link0 to = '/'>
        <Logo src={Logoimg} alt="logoimg"/>
        </Link0>
        <Used>
        <Link0 to ="/fleamarket">중고거래</Link0>
        </Used>
        <Used>
            <Link0 to ="/nearby-stores">동네업체</Link0>
        </Used>
        <Used>
            <Link0 to ="/event">이벤트</Link0>
        </Used>
        <Used>
            <Link0 to ="/member">멤버</Link0>
        </Used>
        <Used>
        <Link0 to ="/api">통신</Link0>
        </Used>
        <Used>
        <Link0 to ="/weather">날씨</Link0>
        </Used>
        <Used>
        <Link0 to ="/order">발주</Link0>
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
    width:80vw;
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

const Link0 = styled(Link)`
    color: #383838;
`