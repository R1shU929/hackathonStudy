import styled from "styled-components";
import {Link} from 'react-router-dom';
import NewYork from  "../../../assets/NewYork.jpeg";
import Paris from "../../../assets/Paris.jpeg";
import Tokyo from   "../../../assets/Tokyo.webp";

function  CityCard(){

    const city = [{
     cityname: "NewYork",
     cityimg: NewYork
    },
    {
        cityname: "Paris",
        cityimg: Paris
       }
       ,
       {
        cityname: "Tokyo",
        cityimg: Tokyo
       }]

    return(
        <Wrapper>
            {
                city.map((item,idx)=>
                <Link1 to ="/detailweather"><Img key={idx} src={item.cityimg}/>

            </Link1> 
                )
               }
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

