import styled from "styled-components";
import { MdError } from "react-icons/md";

const ErrorComp= () =>{
    return(
        <Wrapp>
        <h3>에러가 발생했습니다.</h3>
        <MdError style={{color:red}}/>
        </Wrapp>
    )
}

const Wrapp = styled.main `
display:flex;
flex-direction:column;
`

export default ErrorComp;