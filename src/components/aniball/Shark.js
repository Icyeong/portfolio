import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import create_aniball from '../../utils/ani';
import Spotlight from './Spot';

const Shark = () => {
   const shark_button = useRef();
   const shark_container = useRef();

   useEffect(() => {
      create_aniball(shark_button.current, shark_container.current);
   }, []);

   return (
      <Container>
         <button ref={shark_button}>
            <div className="shark-fin">
               <span></span>
               <span></span>
               <span></span>
            </div>
            <div ref={shark_container} className="face-container">
               <div className="eye left"></div>
               <div className="eye right"></div>
               <div className="nose"></div>
               <div className="mouth">
                  <div>
                     <span></span>
                     <span></span>
                  </div>
                  <div>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
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
      background: #efefef;
      box-shadow: inset 0px 0px 15px 10px #9d9baa;
      position: relative;
      z-index: 2;
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      div {
         opacity: 0;
         display: flex;
         &:first-child span {
            border-bottom: 0.2rem solid transparent;
            border-top: 0.3rem solid white;
            border-left: 0.2rem solid transparent;
            border-right: 0.2rem solid transparent;
         }
         &:last-child span {
            border-bottom: 0.3rem solid white;
            border-top: 0.2rem solid transparent;
            border-left: 0.2rem solid transparent;
            border-right: 0.2rem solid transparent;
         }
      }
   }
   .shark-fin {
      width: 100%;
      height: 100%;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%);
      opacity: 0;
   }
   .shark-fin span {
      border-radius: 3px;
      position: absolute;
      top: 45%;
      &:first-child {
         left: -1.5rem;
         border-bottom: 0.45rem solid transparent;
         border-top: 0.45rem solid transparent;
         border-left: 0.2rem solid transparent;
         border-right: 1.5rem solid #9f9dac;
      }
      &:nth-child(2) {
         right: -1.5rem;
         border-bottom: 0.45rem solid transparent;
         border-top: 0.45rem solid transparent;
         border-left: 1.5rem solid #9f9dac;
         border-right: 0.2rem solid transparent;
      }
      &:last-child {
         top: -2.3rem;
         left: 50%;
         border-bottom: 2.3rem solid #9f9dac;
         border-top: 0.2rem solid transparent;
         border-left: 0.6rem solid transparent;
         border-right: 0.6rem solid transparent;
         transform: translate(-50%);
      }
   }
   .nose::before,
   .nose::after {
      width: 0.15rem;
      height: 0.25rem;
      background: #2a2927;
      border-radius: 50%;
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: -4px;
   }
   .nose::after {
      left: 3px;
   }
   button:hover::before,
   button:hover::after,
   button:hover .mouth div,
   button:hover .shark-fin {
      opacity: 1;
   }
   button:hover .eye,
   button:active .eye {
      width: 0.4rem;
      height: 0.8rem;
      box-shadow: 0 0 0 0.2rem #fff;
      background-color: red;
   }
   button:hover .nose::before,
   button:hover .nose::after {
      height: 0.34rem;
      width: 0.17rem;
   }
   button:hover .mouth,
   button:active .mouth {
      height: 1rem;
      width: 2.3rem;
      bottom: -0.3rem;
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

export default Shark;
