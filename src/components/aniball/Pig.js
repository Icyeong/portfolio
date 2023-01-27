import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import create_aniball from '../../utils/ani';
import Spotlight from './Spot';

const Pig = () => {
   const pig_button = useRef();
   const pig_container = useRef();

   useEffect(() => {
      create_aniball(pig_button.current, pig_container.current);
   }, []);

   return (
      <Container>
         <button ref={pig_button}>
            <div ref={pig_container} className="face-container">
               <div className="eye left"></div>
               <div className="eye right"></div>
               <div className="nose nose-pig"></div>
               <div className="mouth"></div>
               <div className="blusher left">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div className="blusher right">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
         </button>
         <Spotlight />
      </Container>
   );
};

const Container = styled.div`
   width: 6.25rem;
   height: 6.25rem;
   justify-content: center;
   margin: 30px;
   button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      background: #fbc7ff;
      box-shadow: inset 2px -4px 18px #ff9def;
      position: relative;
      z-index: 2;
   }
   button::before {
      width: 1.5rem;
      height: 2.3rem;
      clip-path: circle(25px at 0px 5px);
      background: #fbc7ff;
      box-shadow: inset 2px -5px 10px #ff9def;
      display: block;
      content: '';
      position: absolute;
      top: 0rem;
      left: 0.2rem;
      border-radius: 0.4rem 0.3rem 0 1.3rem;
      transform: rotate(10deg);
      z-index: -1;
      opacity: 0;
   }
   button::after {
      width: 1.5rem;
      height: 2.3rem;
      clip-path: circle(25px at 100% 5px);
      background: #fbc7ff;
      box-shadow: inset 2px -5px 10px #ff9def;
      display: block;
      content: '';
      position: absolute;
      top: 0rem;
      right: 0.2rem;
      border-radius: 0.3rem 0.4rem 1.3rem 0;
      transform: rotate(-10deg);
      z-index: -1;
      opacity: 0;
   }
   .face-container {
      width: 40px;
      height: 38px;
      margin: auto;
      position: relative;
      top: 0.4rem;
   }
   .eye {
      width: 0.6rem;
      height: 0.6rem;
      background: #2a2927;
      border-radius: 50%;
      position: absolute;
      animation: eyeBlink 3200ms linear infinite;
   }
   .eye.left {
      left: 0;
   }
   .eye.right {
      right: 0;
   }
   .nose {
      position: absolute;
      top: 0.8rem;
      left: 50%;
      transform: translate(-50%);
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
   .nose-pig {
      width: 1.5rem;
      height: 1rem;
      border-radius: 7px;
      background-color: #f8a1ff;
   }
   .nose-pig::before,
   .nose-pig::after {
      width: 0.4rem;
      height: 0.5rem;
      background: #2a2927;
      border-radius: 50%;
      display: block;
      content: '';
   }
   .mouth {
      width: 0.5rem;
      height: 0.07rem;
      background: #2a2927;
      border-radius: 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
   }
   .blusher {
      width: 0.4rem;
      height: 0.3rem;
      position: absolute;
      top: 1.2rem;
      display: flex;
      justify-content: space-between;
   }
   .blusher span {
      width: 0.1rem;
      height: 100%;
      background-color: #de7676;
      border-radius: 1rem;
      transform: skewX(-25deg);
   }
   .blusher.left {
      left: -0.8rem;
   }
   .blusher.right {
      right: -0.8rem;
   }

   button:hover::before,
   button:hover::after {
      opacity: 1;
   }

   button:hover .eye,
   button:active .eye {
      width: 0.5rem;
      height: 0.5rem;
      box-shadow: 0 0 0 0.25rem #fff;
   }

   button:hover .nose::before,
   button:hover .nose::after,
   button:active .nose::before,
   button:active .nose::after {
      width: 0.45rem;
      height: 0.55rem;
   }

   button:hover .mouth,
   button:active .mouth {
      height: 0.4rem;
      width: 0.5rem;
      border-radius: 1rem 1rem 0.125rem 0.125rem;
   }

   @keyframes eyeBlink {
      0%,
      30%,
      36%,
      100% {
         -webkit-transform: scale(1);
         transform: scale(1);
      }
      32%,
      34% {
         -webkit-transform: scale(1, 0);
         transform: scale(1, 0);
      }
   }
`;

export default Pig;
