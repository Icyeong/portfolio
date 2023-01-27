import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import create_aniball from '../../utils/ani';
import Spotlight from './Spot';

const Cat = () => {
   const cat_button = useRef();
   const cat_container = useRef();

   useEffect(() => {
      create_aniball(cat_button.current, cat_container.current);
   }, []);

   return (
      <Container>
         <button ref={cat_button}>
            <div className="cat-fur">
               <span></span>
               <span></span>
               <span></span>
            </div>
            <div ref={cat_container} className="face-container">
               <div className="eye left"></div>
               <div className="eye right"></div>
               <div className="nose"></div>
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
               <div className="whiskers left">
                  <span></span>
                  <span></span>
               </div>
               <div className="whiskers right">
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
      background: #ffc580;
      box-shadow: inset 2px -4px 18px #ffa826;
      position: relative;
      z-index: 2;
   }
   button::before {
      width: 1.5rem;
      height: 3rem;
      clip-path: circle(23px at 0px 7px);
      background: #ffc580;
      box-shadow: inset 2px -5px 12px #ffa826;
      display: block;
      content: '';
      position: absolute;
      top: 0rem;
      left: 0.4rem;
      border-radius: 0.3rem 0.3rem 0 1.3rem;
      transform: rotate(10deg);
      z-index: -1;
      opacity: 0;
   }
   button::after {
      width: 1.5rem;
      height: 3rem;
      clip-path: circle(23px at 100% 7px);
      background: #ffc580;
      box-shadow: inset 2px -5px 12px #ffa826;
      display: block;
      content: '';
      position: absolute;
      top: 0rem;
      right: 0.4rem;
      border-radius: 0.3rem 0.3rem 1.3rem 0;
      transform: rotate(-10deg);
      z-index: -1;
      opacity: 0;
   }
   .face-container {
      width: 40px;
      height: 32px;
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
   .cat-fur {
      width: 1.7rem;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%);
   }
   .cat-fur span {
      width: 0.4rem;
      height: 100%;
      background-color: #7c4e0a;
      box-shadow: inset 2px -4px 18px #704405;
      border-radius: 3px 3px 15px 15px;
      position: relative;
      opacity: 0;
   }
   .cat-fur span:nth-of-type(1) {
      height: 80%;
      border-top-left-radius: 7px;
      top: 0.5px;
   }
   .cat-fur span:nth-of-type(3) {
      height: 80%;
      border-top-right-radius: 7px;
      top: 0.5px;
   }
   .nose {
      width: 0.8rem;
      height: 0.5rem;
      top: 1rem;
      clip-path: polygon(0% 0%, 100% 0%, 50% 80%);
      border-radius: 5px;
      background-color: #2a2927;
   }
   .whiskers {
      width: 1.75rem;
      height: 0.8rem;
      position: absolute;
      top: 0.95rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0;
   }
   .whiskers.left {
      left: -2.6rem;
   }
   .whiskers.right {
      right: -2.6rem;
   }
   .whiskers span {
      width: 100%;
      height: 0.06rem;
      background-color: #7c4e0a;
      border-radius: 3px;
      transform-origin: center;
   }
   .whiskers.left span:nth-of-type(1),
   .whiskers.right span:nth-of-type(2) {
      transform: rotate(10deg);
   }
   .whiskers.left span:nth-of-type(2),
   .whiskers.right span:nth-of-type(1) {
      transform: rotate(-10deg);
   }
   button:hover::before,
   button:hover::after,
   button:hover .cat-fur span,
   button:hover .whiskers {
      opacity: 1;
   }
   button:hover .eye,
   button:active .eye {
      width: 0.5rem;
      height: 0.5rem;
      box-shadow: 0 0 0 0.25rem #fff;
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

export default Cat;
