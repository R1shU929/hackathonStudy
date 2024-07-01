import styled from "styled-components";
import {Link} from 'react-router-dom'

function  CityCard(){

    const city = [{
     cityname: "NewYork",
     cityimg: "../../../assets/NewYork.jpeg"
    },
    {
        cityname: "Paris",
        cityimg: "../../../assets/Paris.jpeg"
       }
       ,
       {
        cityname: "Tokyo",
        cityimg: "../../../assets/Tokyo.webp"
       }]

    return(
        <Wrapper>
           <Link1 to ="/detailweather">
            {
                city.map((item,idx)=><Img key={idx} props={item}/>
                )
               }
            </Link1> 
        </Wrapper>
    )
}
export default CityCard;

const Wrapper = styled.div`
width: 90%;
margin-top:40px;
display: flex;
justify-content: space-between;
`
const Img = styled.img`
    width:400px;
    height:600px;
    &:hover{
        scale: 1.03;
        transition: 0.5s;
    }
    transition: 0.5s;
`
const Link1 = styled(Link)`
    
`

