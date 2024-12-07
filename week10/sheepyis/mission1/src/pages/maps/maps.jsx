import styled from "styled-components";
import Map from "../../components/maps/map";

const MapsContainer = styled.div`
    margin-top: 2vw;
    width: 100%;
    height: 40vw;
`

const Maps = () => {
    return (
        <div className="outletContainer">
            <p id="pageTitle">지도 페이지</p>

            <MapsContainer>
                <Map />
            </MapsContainer>
        </div>
    )
}

export default Maps;