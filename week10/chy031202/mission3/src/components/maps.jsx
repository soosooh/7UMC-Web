import React, { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { useState } from "react";

const MapsComp = () =>{

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_TOKEN,
    });

    const [currentPosition, setCurrentPosition] = useState(null); // 현재 위치 저장
    const [error, setError] = useState(null); // 오류 메시지 저장
    const mapRef = useRef(null); // 맵 객체 저장

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
    }, []);

    // currentPosition 변경 시 지도 중심 이동
    useEffect(() => {
        if (currentPosition && mapRef.current) {
            mapRef.current.panTo(currentPosition); // 지도 중심 이동
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
            zoom={8}
        >
            <Marker position={currentPosition} />
            {/* <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} /> */}
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