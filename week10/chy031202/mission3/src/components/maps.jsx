import React, { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { useState } from "react";

const MapsComp = () =>{

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_TOKEN,
        libraries: ["places"], // Places API를 사용하려면 라이브러리 추가 필요
    });

    const [currentPosition, setCurrentPosition] = useState(null); // 현재 위치 저장
    const [error, setError] = useState(null); // 오류 메시지 저장
    const mapRef = useRef(null); // 맵 객체 저장
    const [theaters, setTheaters] = useState([]); // 영화관 리스트 저장

    // 사용자의 현재 위치 가져오기
    // 사용자의 현재 위치 가져오기
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setError("위치 정보를 가져올 수 없습니다. 브라우저 설정을 확인하세요.");
                }
            );
        } else {
            setError("이 브라우저는 Geolocation을 지원하지 않습니다.");
        }
        // if (currentPosition && mapRef.current) {
        //     fetchNearbyTheaters(mapRef.current, currentPosition);
        // }
    }, []);


     // 영화관 검색 함수
    const fetchNearbyTheaters = (map, position) => {
        const service = new window.google.maps.places.PlacesService(map);

        // Nearby Search 요청
        service.nearbySearch(
            {
                location: position, // 현재 위치
                radius: 5000, // 5km 반경
                type: "movie_theater", // 장소 유형 (영화관)
            },
            (results, status) => {
                console.log("Nearby Search Status:", status); // 상태 출력
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setTheaters(results); // 영화관 데이터를 상태에 저장
                    console.log(`results 저장 : ${results}`);
                } else {
                    console.error("Nearby Search 실패:", status);
                }
            }
        );
    };

    // currentPosition 변경 시 지도 중심 이동
    useEffect(() => {
        if (currentPosition && mapRef.current) {
            console.log("Fetching nearby theaters...");
            fetchNearbyTheaters(mapRef.current, currentPosition);
        }
    }, [currentPosition]);


    if (!isLoaded) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!currentPosition) return <div>현재 위치를 가져오는 중입니다...</div>;

    return (
        <Wrapp>
            <GoogleMap
            mapContainerStyle={{ width: "100%", height: "450px" }}
            center={currentPosition}
            zoom={14}
            onLoad={(map) =>{ 
                mapRef.current = map; 
                fetchNearbyTheaters(map, currentPosition);
                }}
            >

            {/* 현재 위치 마커 */}
            <Marker
                    position={currentPosition}
                    icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // 현재 위치는 파란 마커로 표시
                    }}
                />

                {/* 영화관 마커 */}
                {theaters.map((theater, index) => (
                    <Marker
                        key={index}
                        position={{
                            lat: theater.geometry.location.lat(),
                            lng: theater.geometry.location.lng(),
                        }}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // 영화관 마커
                        }}
                        title={theater.name}
                    />
            ))}
            
        </GoogleMap>
        </Wrapp>
        
    );
}

const Wrapp = styled.main`
display:flex;
justify-content:center;
padding-right:10px;

`

export default MapsComp;