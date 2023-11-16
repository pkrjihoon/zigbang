// pages/YourPage.js

// import { DateTime } from 'luxon';

// const YourPage = ({ greeting }) => {
//   console.log('Greeting in YourPage:', greeting);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// YourPage.getInitialProps = async (context) => {
//   const nd = context.query.nowDate || DateTime.local().toISO();
//   console.log('nd:', nd);
//   const evtDate = DateTime.fromISO('2023-11-15T08:00:00');

//   const greeting = DateTime.fromISO(nd) < evtDate
//     ? '안녕하세요'
//     : '반갑습니다';

//   return {
//     greeting,
//   };
// };

// export default YourPage;

// pages/YourPage.js
// import { useState, useEffect } from 'react';

// const YourPage = () => {
//   const [greeting, setGreeting] = useState(''); // 초기값은 빈 문자열로 설정

//   useEffect(() => {
//     const currentDate = new Date();
//     const targetDate = new Date('2023-11-14 17:47:00');

//     // 현재 시간과 목표 시간을 비교
//     if (currentDate < targetDate) {
//       setGreeting('안녕하세요');
//     } else {
//       setGreeting('반갑습니다');
//     }
//   }, []); // useEffect를 한 번만 실행하도록 빈 배열을 전달

//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export default YourPage;



// import { useState, useEffect } from 'react';
// import { DateTime } from 'luxon';

// const YourPage = ({ serverTime }) => {
//   const [greeting, setGreeting] = useState('');

//   useEffect(() => {
//     const targetDate = DateTime.fromISO(serverTime).plus({ days: 1, hours: 8 });

//     // 서버 시간과 목표 시간 비교
//     if (serverTime < targetDate) {
//       setGreeting('안녕하세요');
//     } else {
//       setGreeting('반갑습니다');
//     }
//   }, [serverTime]);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
// //   const serverTime = DateTime.local().toISO();
//   const serverTime = DateTime.utc().toISO();
//   return {
//     props: {
//       serverTime,
//     },
//   };
// };

// export default YourPage;


// pages/YourPage.js

import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const YourPage = ({ serverTime }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const targetDate = DateTime.fromISO('2023-11-14T17:53:00');

    // 서버 시간과 목표 시간 비교
    if (DateTime.fromISO(serverTime) > targetDate) {
      setGreeting('안녕하세요');
    } else {
      setGreeting('반갑습니다');
    }
  }, [serverTime]);

  useEffect(()=> {

  },[])

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const serverTime = DateTime.local().toISO();
  return {
    props: {
      serverTime,
    },
  };
};

export default YourPage;
