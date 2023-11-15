// pages/jihoon/time2.jsx
import { useEffect, useState } from 'react';

const Time2 = () => {
  const [clientTime, setClientTime] = useState('Loading...');
  const [serverTime, setServerTime] = useState('Loading...');

  useEffect(() => {
    // 클라이언트 시간 포맷팅
    const formattedClientTime = new Date().toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    setClientTime(formattedClientTime);

    const fetchServerTime = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/time');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // 서버 시간 포맷팅
        const formattedServerTime = new Date(data.currentTime).toLocaleString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        });

        setServerTime(formattedServerTime);
      } catch (error) {
        console.error('Error fetching server time:', error.message);
        setServerTime('Error fetching server time');
      }
    };

    fetchServerTime();
  }, []);

  return (
    <div>
      <p>Client Time: {clientTime}</p>
      <p>Server Time: {serverTime}</p>
    </div>
  );
};

export default Time2;
