import React from "react";
import styled from "styled-components";

const Description = styled.p`
  opacity: 0; /* 기본적으로 숨김 */
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100%; /* 카드 전체 너비 */
  height: 100%; /* 카드 전체 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* 반투명한 배경 */
`;

const MovieDescription = ({ data }) => {
  return <Description>{data}</Description>;
};

export default movieDescription;
