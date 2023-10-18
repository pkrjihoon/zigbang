import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bure>
          <p>지훈짱짱</p>
          <p>선희짱짱짱</p>
          <p>박지훈짱짱짱</p>
          <p>박지훈짱짱짱</p>
        </Bure>
        <p>
          빠빠빠빠빠!!!!1
          빠빠빠빠빠!!!!2
          빠빠빠빠빠!!!!122222
        </p>
         박지훈짱
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

const Bure = styled.div`
  color: red;
  font-size: 40px;
  text-align: center;
`;
export default App;
