import styled from "styled-components";

const Sckeleton = () => {
    return (
        <Wrapp>
        <SkPoster></SkPoster>
        <SKTitle></SKTitle>
        <SKTitle></SKTitle>
        </Wrapp>
    ) 
}

const Wrapp = styled.main`
position: relative;
    float: left;
    margin-right: 2vw;
    margin-bottom: 3vw;
`

const SkPoster=styled.div `

width: 170.65px;
height: 231.56px;
left: 210px;
top: 182px;

background: #D9D9D9;
border-radius: 10px;

`
const SKTitle = styled.div `
width: 170.65px;
height: 17.85px;
left: 210px;
top: 420.55px;
border-radius: 10px;

margin-top:5px;

background: #D9D9D9;


`

export default Sckeleton;