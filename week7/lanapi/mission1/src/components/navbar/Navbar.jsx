import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { isLoggedIn, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const getNickname = (email) => email ? email.split('@')[0] : '';

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <YongchaNav>
            <span>
                <StyledRouterLink to='/'>
                    <LogoSpan>YONGCHA</LogoSpan>
                </StyledRouterLink>
            </span>
            <span>
                {isLoggedIn ? (
                    <>
                        <Nickname>{getNickname(user?.email)}</Nickname>
                        <StyledBtn color='red' color2='rgb(204,41,0)' onClick={handleLogout}>
                            로그아웃
                        </StyledBtn>
                    </>
                ) : (
                    <>
                        <StyledRouterLink to='/login'>
                            <StyledBtn color2='rgb(48,48,48)'>로그인</StyledBtn>
                        </StyledRouterLink>
                        <StyledRouterLink to='/signup'>
                            <StyledBtn color='red' color2='rgb(204,41,0)'>회원가입</StyledBtn>
                        </StyledRouterLink>
                    </>
                )}
            </span>
        </YongchaNav>
    );
};

export default Navbar;

const YongchaNav = styled.nav`
    background-color: black;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoSpan = styled.span`
    color: red;
    font-size: 1.3em;
    font-weight: bold;
    padding: 5px;
`;

const StyledBtn = styled.button`
    background-color: ${props => props.color || 'black'};
    &:hover {
        background-color: ${props => props.color2}
    };
    border: 1px solid grey;
    border-radius: 0.4em;
    padding: 8px 14px;
    cursor: pointer;
    color: white;
    margin-right: 15px;
`;

const StyledRouterLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Nickname = styled.span`
    color: white;
    font-size: 1em;
    font-weight: bold;
    margin-right: 15px;
`;


// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Navbar = () => {
//     const { isLoggedIn, logout, user } = useContext(AuthContext); // user 객체 추가
//     const navigate = useNavigate();

//     // 이메일에서 닉네임 추출 함수
//     const getNickname = (email) => {
//         return email ? email.split('@')[0] : '';
//     };

//     const handleLogout = () => {
//         logout();
//         navigate('/');
//     };

//     return (
//         <YongchaNav>
//             <span>
//                 <StyledRouterLink to='/'>
//                     <LogoSpan>
//                         YONGCHA
//                     </LogoSpan>
//                 </StyledRouterLink>
//             </span>
//             <span>
//                 {isLoggedIn ? (
//                     <>
//                         {/* 닉네임 표시 */}
//                         <Nickname>{getNickname(user?.email)}</Nickname>
//                         <StyledBtn color={'red'} color2={'rgb(204,41,0)'} onClick={handleLogout}>
//                             로그아웃
//                         </StyledBtn>
//                     </>
//                 ) : (
//                     <>
//                         <StyledRouterLink to='/login'>
//                             <StyledBtn color2={'rgb(48,48,48)'}>로그인</StyledBtn>
//                         </StyledRouterLink>
//                         <StyledRouterLink to='/signup'>
//                             <StyledBtn color={'red'} color2={'rgb(204,41,0)'}>회원가입</StyledBtn>
//                         </StyledRouterLink>
//                     </>
//                 )}
//             </span>
//         </YongchaNav>
//     );
// };

// export default Navbar;

// const YongchaNav = styled.nav`
//     background-color: black;
//     height: 70px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-grow: 1;
// `;

// const LogoSpan = styled.span`
//     color: red;
//     font-size: 1.3em;
//     font-weight: bold;
//     padding: 5px;
//     margin: 10px;
// `;

// const StyledBtn = styled.button`
//     background-color: ${props => props.color || 'black'};
//     &:hover {
//         background-color: ${props => props.color2}
//     };
//     border: 1px solid grey;
//     border-radius: 0.4em;
//     padding: 8px 14px;
//     cursor: pointer;
//     color: white;
//     margin-right: 15px;
// `;

// const StyledRouterLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
// `;

// const Nickname = styled.span`
//     color: white;
//     font-size: 1em;
//     font-weight: bold;
//     margin-right: 15px;
// `;



// import { Link, useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// import { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Navbar = () => {
//     const { isLoggedIn, logout } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate('/');
//     };

//     return (
//         <YongchaNav>
//             <span>
//                 <StyledRouterLink to='/'>
//                     <LogoSpan>
//                         YONGCHA
//                     </LogoSpan>
//                 </StyledRouterLink>
//             </span>
//             <span>
//                 {isLoggedIn ? (
//                     <StyledBtn color={'red'} color2={'rgb(204,41,0)'} onClick={handleLogout}>
//                         로그아웃
//                     </StyledBtn>
//                 ) : (
//                     <>
//                         <StyledRouterLink to='/login'>
//                             <StyledBtn color2={'rgb(48,48,48)'}>로그인</StyledBtn>
//                         </StyledRouterLink>
//                         <StyledRouterLink to='/signup'>
//                             <StyledBtn color={'red'} color2={'rgb(204,41,0)'}>회원가입</StyledBtn>
//                         </StyledRouterLink>
//                     </>
//                 )}
//             </span>
//         </YongchaNav>
//     );
// };

// export default Navbar;

// const YongchaNav = styled.nav`
//     background-color: black;
//     height: 70px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-grow: 1;
// `;

// const LogoSpan = styled.span`
//     color: red;
//     font-size: 1.3em;
//     font-weight: bold;
//     padding: 5px;
//     margin: 10px;
// `;

// const StyledBtn = styled.button`
//     background-color: ${props => props.color || 'black'};
//     &:hover {
//         background-color: ${props => props.color2}
//     };
//     border: 1px solid grey;
//     border-radius: 0.4em;
//     padding: 8px 14px;
//     cursor: pointer;
//     color: white;
//     margin-right: 15px;
// `;

// const StyledRouterLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
// `;
