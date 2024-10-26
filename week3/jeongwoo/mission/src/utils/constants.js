import nowPlayingImage from '../assets/images/image1.png';
import popularImage from '../assets/images/image2.png';
import topRatedImage from '../assets/images/image3.png';
import upcomingImage from '../assets/images/image4.png';

export const MOVIE_CATEGORIES = [
  { 
    title: '현재 상영중인', 
    path: 'now-playing', 
    image: nowPlayingImage 
  },
  { 
    title: '인기있는', 
    path: 'popular', 
    image: popularImage 
  },
  { 
    title: '높은 평가를 받은', 
    path: 'top-rated', 
    image: topRatedImage 
  },
  { 
    title: '개봉 예정', 
    path: 'upcoming', 
    image: upcomingImage 
  }
];