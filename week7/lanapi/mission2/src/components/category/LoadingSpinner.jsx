import React from 'react';

const LoadingSpinner = () => {
    const spinnerStyle = {
        width: '50px',
        height: '50px',
        border: '6px solid rgba(255, 255, 255, 0.2)', // 반투명한 외부 원
        borderTop: '6px solid white', // 회전하는 부분
        borderRadius: '50%', // 원 모양
        animation: 'spin 1s linear infinite', // 회전 애니메이션
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    };

    return (
        <div style={spinnerStyle}>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default LoadingSpinner;
