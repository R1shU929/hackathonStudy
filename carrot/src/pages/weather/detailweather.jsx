import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cloudimg from   "../../assets/Cloud.png";
import '../../App.css';

function Detailweather(){
const {cityname} = useParams();
console.log(cityname)

const APIkey = "0b9242c30b56ea83c194206137498fc5"
const [data,setData] = useState(undefined);



    const TestFunction = async() => {
        try{
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=0b9242c30b56ea83c194206137498fc5&units=metric`)
            .then(response=>{ // 통신하는 데이터명이 리스폰스가 댐
               setData(response.data);
            })
    } 
    catch(error){
            console.log(error)
        }
    }
console.log(data);
    useEffect(()=>{
        TestFunction();
    },[])

    if(!data) return <div>loading중</div>
  
    return(
        <Box>
            <Cloud src={Cloudimg} alt="cloudimg"/>
    <Wrapper>
        <Cityname>{cityname}</Cityname>
        <Box2>
        <Temp>현재 온도 :<Hover>{data.main.temp}°</Hover></Temp>
        <Temp>체감 온도 :<Hover>{data.main.feels_like}°</Hover></Temp>
        <Temp>최고 온도 :<Hover1>{data.main.temp_max}°</Hover1></Temp>
        <Temp>최저 온도 :<Hover>{data.main.temp_min}°</Hover></Temp>
        <Temp>습도 :<Hover>{data.main.humidity}%</Hover></Temp>
        </Box2>
        </Wrapper>
        <Cloud1 src={Cloudimg} alt="cloudimg"/>
        </Box>
    );
}

const Box = styled.div`
    width: 100vw;
    height:90vh;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    position: relative; 
 
`

const Wrapper = styled.div`
    width: 500px;
    height: 600px;
    border-radius: 13px;
    background-color: #ffffff;
    
    margin-right:200px;
    margin-top:60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);

        position: relative;
        animation: fadeInUp 2s;
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
`
const Cityname = styled.h1`
    width:200px;
    height: 50px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    font-family:'ONE-Mobile-Title';
`
const Temp = styled.div`
    width: 200px;
    height: 50px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:'ONE-Mobile-Regular';
`
const Hover = styled.div`
margin-left: 10px;
    width: 60px;
    height: 30px;
    border-radius: 13px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:'ONE-Mobile-Regular';
    &:hover{
        color: #1567abcc;
        background-color: #c0e3ff97;
        transition: 0.5s;
    }
    transition: 0.5s;
`

const Hover1 = styled.div`
margin-left: 10px;
    width: 60px;
    height: 30px;
    border-radius: 13px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:'ONE-Mobile-Regular';
    &:hover{
        color: #ab1515cc;
        background-color: #ffc0c096;
        transition: 0.5s;
    }
    transition: 0.5s;
`

const Cloud = styled.img`
    width:200px;
    height: 200px;
@keyframes cloud {
  0% {
    top:0px;
  }
  95% {
    width: 200px;
  }
  to {
    top:30px;
  } 
}
position: relative;
animation:cloud 2s ease-in Infinite Alternate;

`
const Cloud1 = styled.img`
    width:200px;
    height: 200px;
    position: absolute; // absolute로 자식 선정
    bottom: 100px;
    right: 280px;

    @keyframes cloud {
  0% {
    bottom:0px;
  }
  95% {
    width: 200px;
  }
  to {
    bottom:30px;
  } 
}
animation:cloud 2s ease-in Infinite Alternate;
`
const Box2 = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top:30px;
    `

export default Detailweather;