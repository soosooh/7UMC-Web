import { images } from "./loadImages";

const CategoryData = [
    { 
        "id": 1, 
        "name": "현재 상영중인", 
        "link": "/movies/now-playing",
        "background": images['background1']
    },
    { 
        "id": 2, 
        "name": "인기있는", 
        "link": "/movies/popular",
        "background": images['background2'],
    },
    { 
        "id": 3, 
        "name": "높은 평가를 받은", 
        "link": "/movies/top-rated",
        "background": images['background3'],
    },
    { 
        "id": 4, 
        "name": "개봉 예정중인", 
        "link": "/movies/up-coming",
        "background": images['background4'],
    },
]

export default CategoryData;