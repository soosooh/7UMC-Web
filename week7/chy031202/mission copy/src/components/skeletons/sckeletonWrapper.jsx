import styled from "styled-components";
import Sckeleton from "./sckeletonCard";

const SckeletonWrapper = () => {
    return (
        <SkeletonWrapper>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <Sckeleton key={index} />
                    ))}
        </SkeletonWrapper>

    )
}

const SkeletonWrapper = styled.div`
    
    overflow-y: auto;
    gap: 10px;
`;

export default SckeletonWrapper;