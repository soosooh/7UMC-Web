import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        gap: 10px;  
    }

    @media (max-width: 768px) {
        gap: 8px;   
        padding: 15px;  
    }

    @media (max-width: 480px) {
        gap: 5px;  
        padding: 10px; 
    }
`;

export default CardContainer;
