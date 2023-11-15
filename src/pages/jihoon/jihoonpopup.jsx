import React, { useRef,useState,useEffect } from 'react';
import closeIcon from '../images/ico_pop_close.png';
import styled from 'styled-components';

function MyComponent() {
  const popOpenRef = useRef();
  const [popOpen, setPopOpen] = useState(false);
  const [popScrollTop, setPopScrollTop] = useState(0);
  // let popScrollTop = window.scrollY;


  // const handlePopupClick = () => {
  //   setPopOpen(true);
  //   setPopScrollTop(window.scrollY);
  //   popOpenRef.current.classList.add('open');
  //   document.body.style.position = 'fixed';
  //   document.body.style.right = '0';
  //   document.body.style.left = '0';
  //   document.body.style.bottom = '0';
  //   document.body.style.top = -1 * popScrollTop + 'px';
  // };

  // const handlePopupClick2 = () => {
  //   setPopOpen(false);
  //   document.body.style.position = 'static';
  //   window.scrollTo(0, popScrollTop);
  // };


  const handlePopupClick = () => {
    setPopOpen(true);
    setPopScrollTop(window.scrollY);
  };

  const handlePopupClick2 = () => {
    setPopOpen(false);
  };

  useEffect(() => {
    if (popOpen) {
      document.body.style.position = 'fixed';
      document.body.style.right = '0';
      document.body.style.left = '0';
      document.body.style.bottom = '0';
      document.body.style.top = `-${popScrollTop}px`;
      popOpenRef.current.classList.add('open');
    } else {
      document.body.style.position = 'static';
      document.body.style.removeProperty('right');
      document.body.style.removeProperty('left');
      document.body.style.removeProperty('bottom');
      document.body.style.removeProperty('top');
      window.scrollTo(0, popScrollTop);
      popOpenRef.current.classList.remove('open');
    }
  }, [popOpen, popScrollTop]);

  return (
    <>
      <Popup onClick={handlePopupClick}>
        <a href="#javascript">자세히 보기</a>
      </Popup>

      <Popopen ref={popOpenRef}>
        <div class="popup-ticket">
          <div class="inner line-box">
            <button type="button" class="btn-close" title="팝업 닫기" onClick={handlePopupClick2}>
              <img src={closeIcon} alt="닫기"/>
            </button>

            <h2>가장 많은 유형</h2>
            <div class="scroll-box">
              <ul class="ticket-list">
                <li>
                  <strong class="lank">1위</strong>
                  <p class="ticket-name">행운만땅</p>
                </li>
                <li>
                  <strong class="lank">2위</strong>
                  <p class="ticket-name">찍신강림</p>
                </li>
                <li>
                  <strong class="lank">3위</strong>
                  <p class="ticket-name">얼굴천재</p>
                </li>
                <li>
                  <strong class="lank">4위</strong>
                  <p class="ticket-name">벼락부자</p>
                </li>
                <li>
                  <strong class="lank">5위</strong>
                  <p class="ticket-name">럽미럽미</p>
                </li>
                <li>
                  <strong class="lank">6위</strong>
                  <p class="ticket-name">걱정퇴치</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Popopen>
    </>
  );
}

const Popup = styled.div`
  a {display: block;}
`;

const Popopen = styled.div`
  display: none;
  &.open {
    display: block;
  }
.popup-ticket {display:block; z-index:100; position:fixed; top:0; left:0; right:0; bottom:0; background-color:rgba(0,0,0,.3);}
.popup-ticket .inner {position:fixed; top:50%; left:50%; width:32.7rem; height:27.8rem; padding:4rem 0 5.7rem; background-color:#fff; transform:translate(-50%, -50%); text-align:center; overflow:hidden;}
 button {background-color:transparent; cursor: pointer; border:0;}
.popup-ticket .btn-close {position:absolute; top:3rem; right:2.4rem; width:2.4rem;}
.popup-ticket h2 {display:inline-block; padding:0 .3rem; font-size:2.1rem; box-shadow:inset 0 -1rem 0 rgb(255, 172, 175, 0.18);}
.popup-ticket .scroll-box {height:100%; margin-top:4rem; padding:0 4.5rem;}
.popup-ticket .scroll-content {word-break:keep-all;}
.popup-ticket .ticket-list {flex-wrap:wrap; padding-bottom:6rem;}
.popup-ticket .ticket-list li {list-style:none}
.popup-ticket .ticket-list li:nth-child(2) ~ li {margin-top:4rem;}

`;

export default MyComponent;
