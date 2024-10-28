import styled from "styled-components";
import ItemCategory from "./item-category";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
    margin-top: 1.5rem;
`

const ListCategory = ({ data }) => {
    //console.log(data);

    return (
        <ListContainer>
            {data.map((item) => (
                <ItemCategory 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    link={item.link}
                    background={item.background}
                />
            ))}
        </ListContainer>
    )
}

export default ListCategory;