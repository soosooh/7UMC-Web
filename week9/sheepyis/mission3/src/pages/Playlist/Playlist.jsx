import styled from "styled-components";
import ListPlayList from "../../components/Playlist/list-playlist";

const PlaylistP = styled.p`
    font-size: 2vw;
    font-weight: bold;
    margin: 2vw 0;
`

const Playlist = () => {
    return (
        <div className="pageContainer">
            <PlaylistP>당신이 선택한 음반</PlaylistP>

            <ListPlayList />
        </div>
    )
}

export default Playlist;