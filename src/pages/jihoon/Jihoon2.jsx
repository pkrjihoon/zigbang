import styled from "styled-components";
import "./App.css";

function App() {
    return (
      <>
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
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          src="https://www.youtube.com/embed/futAYQB6V_A?si=WcbsS5-ppwTmqdtH&autoplay=1&mute=1&loop=1&controls=0"
          // src="https://www.youtube.com/embed/futAYQB6V_A?si=WcbsS5-ppwTmqdtH&autoplay=1&mute=1&controls=0&loop=1&playlist=ibYD23-dtjo"
          // frameborder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>

        <video
          width="560"
          height="315"
          autoPlay
          loop
          // muted
          // controls={false}
        >
          <source src="https://youtu.be/futAYQB6V_A?si=gbZgIbhXWFgrZW__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </>
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
