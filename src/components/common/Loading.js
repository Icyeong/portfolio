import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const Loading = () => {
   const loadingRef = useRef();

   useLayoutEffect(() => {
      gsap.to(loadingRef.current, {
         duration: 0.3,
         x: '0%'
      });
      gsap.to(loadingRef.current, {
         delay: 0.6,
         duration: 0.3,
         y: '100%'
      });
   }, []);

   return <Wrapper ref={loadingRef}>Loading...</Wrapper>;
};

const Wrapper = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 3;
   background: #1d1d1d;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   transform: translate(-5%);
`;

export default Loading;
