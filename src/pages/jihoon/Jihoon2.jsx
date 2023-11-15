import styled from "styled-components";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Bure>
                  <p>오구짱짱</p>
                  <p>게임짱짱짱</p>
                  <p>인덱스짱짱짱</p>
                  <p>말스짱짱짱</p>
                </Bure>
            </header>
        </div>
    );
}

const Bure = styled.div`
p {
  color: pink;
  font-size: 40px;
  text-align: center;
}
 
`;
export default App;
