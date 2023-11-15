// pages/YourPage.js
import { DateTime } from 'luxon';

const YourPage = ({ clientTime, serverTime }) => {
  console.log(1111);
  console.log(clientTime);
  console.log(serverTime);

  return (
    <div>
      <p>Client Time: {clientTime}</p>
      <p>Server Time: {serverTime}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/time');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const serverTime = data.currentTime;

    console.log('Server time fetched:', serverTime);

    return {
      props: {
        clientTime: DateTime.local().toISO(),
        serverTime,
      },
    };
  } catch (error) {
    console.error('Error fetching server time:', error.message);
    return {
      props: {
        clientTime: DateTime.local().toISO(),
        serverTime: 'Error fetching server time',
      },
    };
  }
};

export default YourPage;
