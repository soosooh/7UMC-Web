import styled from "styled-components";
import colors from "../../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ImageContainer = styled.div`
    width: 6vw;
    height: 6vw;
    background: ${props => props.background ? `url(${props.background})` : colors.black};
    border: 0.1vw solid ${colors.white};
    border-radius: 50%;
    background-size: cover;
    background-position: center;
`

const DetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.3vw;
    margin-top: 0.5vw;
`

const CreditP = styled.p`
    font-size: ${props => props.fontSize || '1vw'};
    font-weight: ${props => props.fontWeight || 'normal'};
`

const ItemCredit = ({ profile_path, name, role }) => {
    return (
        <ItemContainer>
            <ImageContainer background={profile_path}/>
            <DetailContainer>
                <CreditP>{name}</CreditP>
                <CreditP style={{opacity: 0.5}}>{role}</CreditP>
            </DetailContainer>
        </ItemContainer>
    )
}

export default ItemCredit;