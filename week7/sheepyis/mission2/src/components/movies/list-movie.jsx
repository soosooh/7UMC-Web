import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import styled, { keyframes } from "styled-components";
import ItemMovie from "./item-movie";
import colors from "../../styles/colors";

const SkeletonLoader = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  width: 100%;
`;

const SkeletonItem = styled.div`
  padding: 1rem;
  animation: pulse 3s infinite ease-in-out;
`;

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Spinner = styled.div`
  margin: 2rem auto;
  width: 3vw;
  height: 3vw;
  border: 0.4rem solid ${colors.navBackground};
  border-top: 0.4rem solid ${colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
`;

const ListMovie = ({ url, query }) => {
  const { data, loading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetch(url);
  const loadMoreRef = useRef(null);

  // 스크롤 시 다음 페이지 데이터 자동 읽기
  useEffect(() => {
    // 페이지가 없거나 로딩 중일 경우 실행 x
    if (!hasNextPage || isFetchingNextPage) return;

    // 요소가 뷰포트에 들어오면 페이지 로드
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage();  // 다음 페이지 데이터 요청
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.5,
      }
    );

    // loadMoreRef가 화면에 보일 때 observer 활성화
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    // observer 해제
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // 로딩 중일 때 스켈레톤 UI를 표시
  if (loading) {
    return (
      <SkeletonLoader >
        {new Array(8).fill(null).map((_, index) => (
          <SkeletonItem key={index}>
            <div style={{ width: "100%", height: "11vw", backgroundColor: colors.navBackground }}></div>
            <div style={{ marginTop: "0.5vw", height: "0.7vw", backgroundColor: colors.navBackground }}></div>
            <div style={{ marginTop: "0.25vw", height: "0.6vw", backgroundColor: colors.navBackground }}></div>
          </SkeletonItem>
        ))}
      </SkeletonLoader>
    );
  }

  // 오류가 발생했을 경우 오류 메시지 표시
  if (error) {
    return <div className="outletContainer" style={{ textAlign: "center" }}>로딩 중 오류가 발생했습니다.</div>;
  }

  const movies = data ? data.pages.flatMap(page => page.results) : [];

  return (
    <ListContainer>
      {movies.length > 0 ? (
        movies.map(movie => (
          <ItemMovie
            key={movie.index}
            id={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            date={movie.release_date}
            overview={movie.overview}
          />
        ))
      ) : (
        <div className="outletContainer" style={{ whiteSpace: "nowrap", fontSize: "0.8vw", fontWeight: "bold" }}>
          {query ? `검색어 ${query}에 해당되는 데이터가 없습니다.` : ""}
        </div>
      )}

      {/* "load more" 트리거 요소 */}
      <div ref={loadMoreRef} style={{ height: "1px" }} />
      
      {/* 다음 페이지 데이터를 로딩 중일 때 스피너 표시 */}
      {isFetchingNextPage && <Spinner />}
    </ListContainer>
  );
};

export default ListMovie;
