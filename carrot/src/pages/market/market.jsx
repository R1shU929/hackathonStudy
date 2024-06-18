import styled from 'styled-components'
import Bannerimg from '../../assets/banner.png'
import Itembox from './components/itembox';

function Market(){
    return(
        <>
    <Banner src={Bannerimg} alt="bannerimg"/> 
    <Wrapper>
        <Box>
            <Hot>

            </Hot>
            <Itembox>

            </Itembox>
        </Box>
    </Wrapper>
    </>
    );
}

const Banner = styled.img`
    width: 100%;
`
const Wrapper = styled.div`
    width: 100%;
`
const Box = styled.div`
    width: 100%;
`
const Hot = styled.div`
    width: 100%;
`

export default Market;