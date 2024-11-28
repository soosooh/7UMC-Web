import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Clock, Calendar } from 'lucide-react';

const TaskManager = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timeUpdateInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timeUpdateInterval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const getDayOfWeek = (date) => {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    return `${weekdays[date.getDay()]}요일`;
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '400px',
      margin: 'auto',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '500px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '16px',
      marginBottom: '16px',
      borderBottom: '1px solid #e5e7eb',
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#374151',
    },
    subtitle: {
      fontSize: '14px',
      color: '#6b7280',
    },
    time: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#374151',
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <h2 style={styles.title}>
              <Calendar style={{ marginRight: '8px', color: '#2563eb' }} size={24} />
              {formatDate(currentDateTime)}
            </h2>
            <p style={styles.subtitle}>{getDayOfWeek(currentDateTime)}</p>
          </div>
          <div style={styles.time}>
            <Clock style={{ marginRight: '8px', color: '#2563eb' }} size={20} />
            {formatTime(currentDateTime)}
          </div>
        </header>

        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default TaskManager;
