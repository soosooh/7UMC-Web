import React from 'react';

const Overlay = ({ title, overview }) => {
    return (
        <div style={styles.overlay}>
            <h3 style={styles.overlayTitle}>{title}</h3>
            <p style={styles.overview}>{overview}</p>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '8px',
    },
    overlayTitle: {
        fontSize: '18px',
        marginBottom: '10px',
        textAlign: 'left',
    },
    overview: {
        fontSize: '14px',
        textAlign: 'center',
    },
};

export default Overlay;
