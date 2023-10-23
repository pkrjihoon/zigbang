import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('tab1'); // 기본 활성 탭 설정

  useEffect(() => {
    // 여기에 부수 효과 관련 작업을 수행
    console.log('컴포넌트가 렌더링될 때 실행됨');

    return () => {
      // 정리(clean-up) 작업을 수행하는 함수
      console.log('컴포넌트가 언마운트되기 전 또는 업데이트되기 전에 실행됨');
    };
  }, []); // 의존성 배열

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <>
    <TestBox>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </TestBox>
    <div>
      <div>
        <button onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div>
        {activeTab === 'tab1' && (
          <div>
            <p>Tab 1 Content</p>
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
    </div>
    </>
  );
}


const TestBox = styled.div`
  color: red;
`

export default MyComponent;
