import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('tab'); // 기본 활성 탭 설정
  const [activeTab2, setActiveTab2] = useState('home');

  useEffect(() => {
    // // 여기에 부수 효과 관련 작업을 수행
    // console.log('컴포넌트가 렌더링될 때 실행됨');

    // return () => {
    //   // 정리(clean-up) 작업을 수행하는 함수
    //   console.log('컴포넌트가 언마운트되기 전 또는 업데이트되기 전에 실행됨');
    // };
  }, []); // 의존성 배열

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleTabClick2 = (tab) => {
    setActiveTab2(tab);
  };

  // const tabs = [
  //   { id: 'home', label: 'Home', content: 'This is the Home tab content.' },
  //   { id: 'about', label: 'About', content: 'This is the About tab content.' },
  //   { id: 'content1', label: 'Content 1', content: 'This is Content 1 tab content.' },
  //   { id: 'content2', label: 'Content 2', content: 'This is Content 2 tab content.' },
  // ];

  const tabs = [
    { id: 'home'},
    { id: 'about'},
    { id: 'content1'},
    { id: 'content2'},
  ];
  

  return (
    <>
    <TestBox>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </TestBox>
    <div>
      <div>
        <button onClick={() => handleTabClick('tab')}>Tab 1</button>
        <button onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div>
        {activeTab === 'tab' && (
          <div>
            <p> 12222 Content</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div>
            <p>Tab 2 Content</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div>
            <p>Tab 3 Content</p>
          </div>
        )}
      </div>

      <Tabbox>
      <ul className="tab-menu">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            // data-target={`#${tab.id}`}
            // className={activeTab2 === tab.id ? 'on' : ''}
            onClick={() => handleTabClick2(tab.id)}
          >
            <a href="#javascript" onClick={(e) => {
              e.preventDefault(); // 기본 링크 동작을 중지
              // 원하는 동작을 여기에 추가
              }}>
              {tab.id}
            </a>
          </li>
        ))}
      </ul>

      {/* <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`tab-content ${activeTab2 === tab.id ? 'on' : ''}`}
          >
             {tab.content}
            {`${tab.label} ipsum, dolor sit amet consectetur adipisicing elit...`}
          </div>
        ))}
      </div> */}
      </Tabbox>
      
      <div className="tab-content" id="home" style={{ display: activeTab2 === 'home' ? 'block' : 'none' }}>
        <h1>Home</h1>
        <p>This is the Home tab content.</p>
      </div>

      <div className="tab-content" id="about" style={{ display: activeTab2 === 'about' ? 'block' : 'none' }}>
        <h1>About</h1>
        <p>This is the About tab content.</p>
      </div>

      <div className="tab-content" id="content1" style={{ display: activeTab2 === 'content1' ? 'block' : 'none' }}>
        <h1>Content 1</h1>
        <p>This is Content 1 tab content.</p>
      </div>

      <div className="tab-content" id="content2" style={{ display: activeTab2 === 'content2' ? 'block' : 'none' }}>
        <h1>Content 2</h1>
        <p>This is Content 2 tab content.</p>
      </div>
      
    </div>
    </>
  );
}


const TestBox = styled.div`
  color: red;
`
const Tabbox = styled.div`
  max-width: 1240px; margin: 60px auto;
  ul {list-style: none; display: flex; justify-content: space-between; margin-bottom: 50px;}
  ul li {background-color: pink}
  ul li a {display: inline-flex; align-items: center; justify-content: center; width: 200px; height: 50px; text-decoration: none; color: inherit;}
  ul li.on {color: #fff; background-color: purple;}
  .tab-content {display: none;}
  .tab-content.on {display: block;}
`

export default MyComponent;
