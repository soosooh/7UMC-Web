import React from 'react';
import CategoryList from '../components/Category-list';
import NowPlayingImg from '../assets/image/NowPlaying.png';
import TopRatedImg from '../assets/image/TopRated.png';
import PopularImg from '../assets/image/Popular.png';
import UpComingImg from '../assets/image/UpComing.png';

const categoryData = [
  { path: '/movies/now-playing', img: NowPlayingImg, label: '현재 상영중인' },
  { path: '/movies/popular', img: PopularImg, label: '인기있는' },
  { path: '/movies/top-rated', img: TopRatedImg, label: '높은 평가를 받은' },
  { path: '/movies/up-coming', img: UpComingImg, label: '개봉 예정중인' },
];

const Category = () => {
  return <CategoryList categories={categoryData} />;
};

export default Category;
