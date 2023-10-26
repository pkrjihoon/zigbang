import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/pkrjihoon/file/main/mylist.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div>
      <h1>JSON Data</h1>
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
