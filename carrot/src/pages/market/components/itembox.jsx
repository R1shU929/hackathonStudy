import styled from "styled-components";
import Itemimg from "../../../assets/anxiety.png"

function Itembox(){
    return(
        <Card>
            <Itemimg src={Itemimg} alt="bannerimg"/>
        </Card>
    );
}

const Card = styled.div`
    width:200px;
`
export default Itembox;