import styled from 'styled-components'
import Bannerimg from '../../assets/banner.png'

function Market(){
    return(
    <Banner src={Bannerimg} alt="bannerimg"/> 
    );
}

const Banner = styled.img`
    width: 100%;
`

export default Market;