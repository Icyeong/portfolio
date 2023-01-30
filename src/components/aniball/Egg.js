import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import create_aniball from '../../utils/ani';
import Spotlight from './Spot';

const Egg = () => {
   const egg_button = useRef();
   const egg_container = useRef();

   useEffect(() => {
      create_aniball(egg_button.current, egg_container.current);
   }, []);

   return (
      <Container>
         <button ref={egg_button}>
            <div className="york"></div>
            <div ref={egg_container} className="face-container">
               <div className="eye left"></div>
               <div className="eye right"></div>
               <div className="mouth"></div>
               <div className="sweat"></div>
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
   button,
   .york {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      background: #ffda1a;
      box-shadow: inset 0px -4px 18px #ffbf5f;
      position: relative;
      z-index: 2;
   }
   .york {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
   }
   button::before {
      width: 130%;
      height: 130%;
      background: rgba(255, 255, 255, 0.4);
      content: '';
      position: absolute;
      top: -15%;
      left: -15%;
      border-radius: 37% 35% 48% 38%;
      transform: rotate(10deg) scale(1.05);
      opacity: 0;
   }
   button::after {
      width: 130%;
      height: 130%;
      background: rgba(255, 255, 255, 0.5);
      content: '';
      position: absolute;
      top: -15%;
      left: -15%;
      border-radius: 33% 47% 28% 37%;
      transform: rotate(-40deg) scale(1.05);
      opacity: 0;
   }
   .face-container {
      width: 45px;
      height: 32px;
      margin: auto;
      position: relative;
      top: 0.4rem;
      z-index: 2;
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
   .sweat {
      width: 6px;
      height: 12px;
      position: absolute;
      right: -15px;
      top: -10px;
      opacity: 0;
      &::before,
      &::after {
         width: 100%;
         height: 100%;
         background-color: rgba(255, 255, 255, 0.8);
         content: '';
         position: absolute;
         top: 0;
         right: 0;
         border-radius: 0% 100% 22% 78% / 0% 73% 27% 100%;
      }
      &::after {
         top: 20px;
         right: -5px;
         transform: rotateZ(17deg);
      }
   }
   button:hover::before,
   button:hover::after,
   button:hover .sweat {
      opacity: 1;
   }
   button:hover .eye,
   button:active .eye {
      width: 0.5rem;
      height: 0.5rem;
      box-shadow: 0 0 0 0.3rem #fff;
   }
   button:hover .mouth,
   button:active .mouth {
      width: 1rem;
      height: 0.7rem;
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

export default Egg;
