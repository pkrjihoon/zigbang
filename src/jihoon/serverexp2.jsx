import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터 가져오기
    fetch('https://raw.githubusercontent.com/pkrjihoon/file/main/mylist.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // 데이터를 상태로 설정
        setData(jsonData);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 데이터를 가져옴



  return (
    <div>
      <h1>useEffect datajasn 가져오기</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
          <h2>{item.title}</h2>
            <img src={`https://raw.githubusercontent.com/pkrjihoon/file/main/images/${item.album_image}`} alt={item.title} />
          </li>
        ))}
      </ul>
      <div>
        {/* <img src={imageUrl} alt="Sample" /> */}
      </div>
    </div>
  );
}

export default App;
