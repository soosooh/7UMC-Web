import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

const FooterContainer = styled.div`
    width: 60%;
    margin: 4vw 0;
    border-top: 0.15vw solid ${colors.headerBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1vw 0;
`

const FooterP = styled.p`
    font-size: 1vw;
    font-weight: bold;
`

const InitButton = styled.div`
    width: 10vw;
    height: 2vw;
    border-radius: 0.25vw;
    border: 0.15vw solid ${colors.init};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-size: 1vw;
    font-weight: bold;
    color: ${colors.init};
`

const Footer = () => {
    const { total } = useSelector((store) => store.cart);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="pageContainer">
            <FooterContainer>
                <TopContainer>
                    <FooterP>총 가격</FooterP>
                    <FooterP>{total}원</FooterP>
                </TopContainer>

                <InitButton onClick={handleOpenModal}>장바구니 초기화</InitButton>

                {isModalOpen && (
                    <Modal onClose={handleCloseModal}/>
                )}
            </FooterContainer>
        </div>
    )
}

export default Footer;