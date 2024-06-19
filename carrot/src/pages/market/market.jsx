import styled from 'styled-components'
import Bannerimg from '../../assets/banner.png'
import Itembox from './components/itembox';

function Market(){
    const testArr = [1,2,3,4,5,6,7,8,9,10,11,12]

    return(
        <>
    <Banner src={Bannerimg} alt="bannerimg"/> 
    <Wrapper>
        
            <Hot>중고거래 인기매물</Hot>
            
        <Box>
            {/* map으로 jsx에서 반복문을 돌릴수있다. */}
            {
                testArr.map((charlotte)=> <Itembox key={charlotte}/> // for문이 아닌 map으로 TestArr의 값들을 반복하여 보여줌.
            )
            }
            
        </Box>
    </Wrapper>
    </>
    );
}
export default Market;

const Banner = styled.img`
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Box = styled.div`
    width: 1100px;
    display: grid; // 그리드 설정
    justify-items: center;
    grid-template-columns: repeat(3, 1fr); // 1층에 3개 보여주기
    row-gap: 40px; // 위 아래 공백
    @media (max-width:1300px){ // 반응형 1300px. 1300px이 되면 2개씩 보여줌
        grid-template-columns: repeat(2,1fr); 
    }

`
const Hot = styled.h1`
    width: 100%;
    margin-top:50px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`

