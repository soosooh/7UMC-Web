import SkeletonCard from "./skeletonCard";

const SkeletonList = () => {
  return new Array(20).fill(0).map((_, idx) => <SkeletonCard />);
};
export default SkeletonList;
