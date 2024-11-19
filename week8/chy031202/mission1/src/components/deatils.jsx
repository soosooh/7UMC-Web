import styled from "styled-components";

const Details = () => {
    return(
        <Wrapp>
        <span className="logo">⚡ UMC ToDoList ⚡</span>
        <>
        <Button>완료</Button>
        </>
        <>
        <Input placeholder="제목"/>
        <InputCont placeholder="내용"/>
        </>
        <ButonWrapp>
            <UnderButton>수정하기</UnderButton>
            <UnderButton>삭제하기</UnderButton>
        </ButonWrapp>
        </Wrapp>
    )
}

const Wrapp = styled.main`
display:flex;
flex-direction:column;
gap:10px;
`

const UnderButton = styled.button`
width: 340px;
height: 60px;


background: #C0C3D8;
border-radius: 10px;
color:white;

`

const ButonWrapp = styled.article`
display:flex;
gap:30px;
`

const Input = styled.input `

width: 704px;
height: 60px;
background: #FFFFFF;
border: 2px solid #A19D9D;
border-radius: 10px;
`
const InputCont = styled(Input)`
height: 502px;
`

const Button = styled.button `

width: 120px;
height: 40px;
background: #C0C3D8;
border-radius: 50px;

color: #000000;


`
export default Details;