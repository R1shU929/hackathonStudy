import styled from "styled-components";
import CityCard from "./components/citycard";
import '../../App.css';

function Weather(){
    
    return(
        <Wrapper>
            <Title>
                Weathery
            </Title>
            <Array>
                <CityCard/>
            </Array>

        

        </Wrapper>
    )
}
export default Weather;

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    font-family:'Cafe24Meongi-W-v1.0';
    font-size: 30px;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: lightskyblue;
    padding-top: 20px;
`
const Array = styled.div`
    display: flex;
    justify-content: center;
    gap: 45px;
`