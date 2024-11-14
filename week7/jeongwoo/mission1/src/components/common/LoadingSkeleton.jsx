import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
 0% {
   background-position: 200% 0;
 }
 100% {
   background-position: -200% 0;
 }
`;

const BaseSkeletonWrapper = styled.div`
 background: linear-gradient(
   90deg,
   rgba(26, 26, 26, 0.8) 25%,
   rgba(42, 42, 42, 0.8) 50%,
   rgba(26, 26, 26, 0.8) 75%
 );
 background-size: 200% 100%;
 animation: ${pulse} 1.5s infinite;
 border-radius: 4px;
`;

// MovieCard 스켈레톤
const MovieCardSkeletonWrapper = styled(BaseSkeletonWrapper)`
 display: flex;
 flex-direction: column;
 width: 100%;
`;

const CardImageSkeleton = styled(BaseSkeletonWrapper)`
 width: 100%;
 aspect-ratio: 2/3;
 margin-bottom: 8px;
`;

const TitleSkeleton = styled(BaseSkeletonWrapper)`
 height: 14px;
 width: 80%;
 margin: 8px 0 4px 0;
`;

const DateSkeleton = styled(BaseSkeletonWrapper)`
 height: 12px;
 width: 60%;
 margin-top: 4px;
`;

export const MovieCardSkeleton = () => (
 <MovieCardSkeletonWrapper>
   <CardImageSkeleton />
   <TitleSkeleton />
   <DateSkeleton />
 </MovieCardSkeletonWrapper>
);

// MovieList 스켈레톤
const MovieGridSkeleton = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 gap: 20px;
 padding: 20px 0;
`;

export const MovieListSkeleton = () => (
 <MovieGridSkeleton>
   {[...Array(12)].map((_, index) => (
     <MovieCardSkeleton key={index} />
   ))}
 </MovieGridSkeleton>
);

// Banner 스켈레톤
const BannerSkeletonWrapper = styled(BaseSkeletonWrapper)`
 width: 100%;
 height: 300px;
 margin-bottom: 40px;
 border-radius: 10px;
`;

export const BannerSkeleton = () => (
 <BannerSkeletonWrapper />
);

// Credits 스켈레톤
const CreditItemSkeletonWrapper = styled(BaseSkeletonWrapper)`
 text-align: center;
 min-width: 80px;
`;

const CreditImageSkeleton = styled(BaseSkeletonWrapper)`
 width: 80px;
 height: 80px;
 border-radius: 50%;
 margin: 0 auto 8px;
`;

const CreditNameSkeleton = styled(BaseSkeletonWrapper)`
 height: 12px;
 width: 70%;
 margin: 0 auto 4px;
`;

const CreditRoleSkeleton = styled(BaseSkeletonWrapper)`
 height: 11px;
 width: 50%;
 margin: 0 auto;
`;

export const CreditItemSkeleton = () => (
 <CreditItemSkeletonWrapper>
   <CreditImageSkeleton />
   <CreditNameSkeleton />
   <CreditRoleSkeleton />
 </CreditItemSkeletonWrapper>
);

// Credits List 스켈레톤
const CreditsGridSkeleton = styled.div`
 display: grid;
 grid-template-columns: repeat(10, 1fr);
 gap: 10px;
 overflow-x: auto;
 padding-bottom: 20px;
`;

export const CreditsListSkeleton = () => (
 <div style={{ margin: '40px' }}>
   <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>감독/출연</h2>
   <CreditsGridSkeleton>
     {[...Array(10)].map((_, index) => (
       <CreditItemSkeleton key={index} />
     ))}
   </CreditsGridSkeleton>
 </div>
);

// Search 스켈레톤
const SearchGridSkeleton = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 gap: 20px;
 padding: 20px 0;
`;

export const SearchResultsSkeleton = () => (
 <SearchGridSkeleton>
   {[...Array(8)].map((_, index) => (
     <MovieCardSkeleton key={index} />
   ))}
 </SearchGridSkeleton>
);

// Category 스켈레톤
const CategoryItemSkeletonWrapper = styled(BaseSkeletonWrapper)`
 aspect-ratio: 16/9;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 8px;
`;

export const CategoryItemSkeleton = () => (
 <CategoryItemSkeletonWrapper />
);

const CategoryGridSkeleton = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 gap: 20px;
`;

export const CategoryListSkeleton = () => (
 <CategoryGridSkeleton>
   {[...Array(4)].map((_, index) => (
     <CategoryItemSkeleton key={index} />
   ))}
 </CategoryGridSkeleton>
);