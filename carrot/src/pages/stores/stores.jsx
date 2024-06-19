import StoreBannerimg from '../../assets/storebanner.png'
import styled from 'styled-components';
import StoreIcon from './components/storeicon';
import Storebox from './components/storebox';

function Stores (){
    const storeArr = [1,2,3,4,5,6,7,8]
    return(
        <>
        <StoreBanner src={StoreBannerimg} alt="stbannerimg"/>
        <Wrapper>
            <Title>다양한 동네 업체를 볼 수 있어요</Title>
            <StoreIcon/>
            <Box>
                {
                storeArr.map((yoon)=><Storebox key={yoon}/>
                )
                }
            </Box>
        </Wrapper>
        </>
    );
}

const StoreBanner = styled.img`
    width:100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

`

const Title = styled.h1`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 30px;
    color: #3c3c3c;
    
`
const Box = styled.div`
    width:800px;
    flex-direction: column;
    display: grid;
    justify-items:center;
    grid-template-columns: repeat(2,1fr);

`

export default Stores;