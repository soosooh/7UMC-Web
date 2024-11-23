import React from "react";

const Loading = () => {
  const styles = {
    loadingContainer: {
      marginTop: "20px",
      textAlign: "center",
      color: "#666",
    },
    loadingDots: {
      fontSize: "24px",
      color: "#666",
      animation: "blink 1.5s steps(3, end) infinite",
    },
    loadingText: {
      marginTop: "10px",
      fontSize: "16px",
      color: "#666",
    },
  };

  return (
    <div style={styles.loadingContainer}>
      <div style={styles.loadingDots}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <p style={styles.loadingText}>게시물을 불러오는 중입니다.</p>
    </div>
  );
};

export default Loading;
