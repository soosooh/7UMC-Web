import styled from "styled-components";
import getRedirectURI from "../../apis/redirectURI";
import KakaoRedirectHandler from "./kakaoRedirect";


const KakaoBtn =() =>{
    const kakaoRestAPI = import.meta.env.VITE_KAKAO_TOKEN;
    const redirect_uri = getRedirectURI();
    // 카카오톡 로그인 화면 url
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestAPI}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleClick = () => {
        alert("카카오 버튼 클릭!");
        window.location.href = kakaoURL;
        //KakaoRedirectHandler;
    };
    return(
        <ButtonWRapp>
            <ButtonImage src="/src/assets/images/kakaoBtn.png"
                alt="Kakao Login" onClick={handleClick}/>
        </ButtonWRapp >
    )
}


const ButtonWRapp = styled.div`
display:flex;
justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ButtonImage = styled.img`
max-width:370px;
    width: 100vw; /* 원하는 버튼 너비 */
    min-width:160px;
    height: auto;
    border: none;
    background-color: transparent;
    user-select: none; /* 이미지 드래그 방지 */
`;

export default KakaoBtn;