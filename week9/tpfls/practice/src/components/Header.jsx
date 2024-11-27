import React from 'react';

export default function Header() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid #E7E8F4',
      borderRadius: '10px 10px 0 0',
      fontFamily: 'Arial, sans-serif',
    },
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
      fontSize: '14px',
      color: '#6c757d',
      
    },
    date: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    weekday: {
      fontSize: '14px',
      color: '#6c757d',
      marginTop: '5px',
    },
    time: {
      fontSize: '16px',
      fontWeight: 'normal',
    },
  };

  const now = new Date();
  const date = now.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const weekday = now.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  const time = now.toLocaleTimeString('ko-KR');

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <p style={styles.date}>{date}</p>
        <p style={styles.weekday}>{weekday}</p>
      </div>
      <div style={styles.right}>
        <p style={styles.time}>{time}</p>
      </div>
    </div>
  );
}
