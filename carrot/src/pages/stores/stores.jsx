import StoreBannerimg from '../../assets/storebanner.png'
import styled from 'styled-components';
import StoreIcon from './components/storeicon';
import Storebox from './components/storebox';

function Stores (){
    const storeArr = [{
        title:"혜윤이의 연애 상담소",place:"사랑동",contents:"김태기 혼나 아주",review:"후기 0개.."
    },{
        title:"다이어트 상담소",place:"사랑동",contents:"대지들 혼나",review:"후기 0개.."
    },{
        title:"탕탕 후루후루",place:"사랑동",contents:"파인애플 탕후루 당도 최고",review:"후기 0개.."
    },{
        title:"마라탕맛집",place:"사랑동",contents:"꽃분모자맛있음",review:"후기 0개.."
    },{
        title:"푸바오 만두 가게",place:"판다동",contents:"딤섬맛 푸바오",review:"후기 0개.."
    },{
        title:"마이멜로디의 사탕가게",place:"사탕동",contents:"핑크맛 사탕 가게",review:"후기 0개.."
    },{
        title:"불안이의 불안불안",place:"불안동",contents:"인사이드 아웃2 대흥행!",review:"후기 0개.."
    },{
        title:"복실이의 구름젤리",place:"복실동",contents:"구름이 두두둥실",review:"후기 0개.."
    }];
    return(
        <>
        <StoreBanner src={StoreBannerimg} alt="stbannerimg"/>
        <Wrapper>
            <Title>다양한 동네 업체를 볼 수 있어요</Title>
            <StoreIcon/>
            <Box>
                {
                storeArr.map((yoon,idx)=><Storebox key={idx} props={yoon}/>
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