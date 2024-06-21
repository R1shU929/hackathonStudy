import styled from "styled-components";
import MemberCard from "./components/membercard";

function Member(){
    const memberArr = [
		{
			img: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
			name: '혜윤',
			part: '프론트엔드',
		},
		{
			img: 'https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp',
			name: '태기',
			part: '프론트엔드',
		},
		{
			img: 'https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp',
			name: '수민',
			part: '프론트엔드',
		},
	];

    return(
        <Wrapper>
            <Name>
                프론트엔드 멤버를 소개합니다 !
            </Name>
            <Box>
            {
                memberArr.map((yoon,idx)=><MemberCard key={idx} props={yoon}/>
                )
                }
            </Box>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
const Name = styled.h1`
    width:400px;
    height:50px;
`
const Box = styled.div`
    width:800px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

`
export default Member;