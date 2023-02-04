import styled from 'styled-components';
import Experience from './Experience';
import Stacks from './Stacks';
import { useState } from 'react';

const InfoTab = () => {
   const [activeBtn, setActiveBtn] = useState('stack');
   return (
      <Wrapper>
         <BtnWrapper>
            <button onClick={() => setActiveBtn('stack')} className={activeBtn === 'stack' ? 'active' : null}>
               Stack
            </button>
            <button onClick={() => setActiveBtn('exp')} className={activeBtn === 'exp' ? 'active' : null}>
               Experience
            </button>
         </BtnWrapper>
         <TabContainer>{activeBtn === 'stack' ? <Stacks /> : <Experience />}</TabContainer>
      </Wrapper>
   );
};

const Wrapper = styled.section`
   flex: 1;
   height: 100vh;
   position: relative;
   overflow: hidden;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   &::after {
      content: '';
      width: 150vh;
      height: 100vh;
      background-color: #2e2e2e;
      position: absolute;
      top: 55px;
      left: 5vw;
      transform: skewX(0.3deg) rotateZ(-7deg);
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
   }
`;

const BtnWrapper = styled.div`
   width: fit-content;
   display: flex;
   margin: 55px 0 0 110px;
   transform: rotateZ(-7deg);
   position: relative;
   z-index: 1;
   align-self: flex-start;
   button {
      margin-right: 50px;
      padding: 5px 10px;
      font-size: 1.25rem;
      color: #9e9e9e;
      background-color: transparent;
      border: none;
      position: relative;
      &.active {
         color: #f5d20e;
      }
      &.active::before {
         background-color: #f5d20e;
      }
   }
   button::before {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #9e9e9e;
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);
   }
`;

const TabContainer = styled.ul`
   width: 80%;
   height: calc(100vh - 170px);
   z-index: 1;
   overflow-y: scroll;
   margin: 10vh 0 0 100px;
   &::-webkit-scrollbar {
      width: 10px;
      background: rgba(0, 0, 0, 0);
   }
   &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
   }
   li {
      width: 100%;
      justify-content: center;
   }
   /* Stacks */
   .grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      .item {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin-bottom: 30px;
         font-size: 1rem;
         color: #c1c1c1;
         .imgBox {
            width: 6.25rem;
            height: 6.25rem;
            background-color: lightgray;
            margin-bottom: 10px;
            overflow: hidden;
            transition: 0.3s;
            border-radius: 15%;
            &:hover {
               transform: scale(0.98) translateY(3px);
            }
         }
         img {
            width: 100%;
         }
      }
      @media screen and (max-width: 1600px) {
         grid-template-columns: repeat(4, 1fr) !important;
         .item .imgBox {
            width: 5.8rem;
            height: 5.8rem;
         }
      }
      @media screen and (max-width: 1440px) {
         grid-template-columns: repeat(3, 1fr) !important;
         .item .imgBox {
            width: 5.2rem;
            height: 5.2rem;
         }
      }
   }
   /* Experience */
   .experience-container {
      height: 100%;
      padding-left: 20px;
      padding-top: 20px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
         width: 10px;
         background: rgba(0, 0, 0, 0);
      }
      &::-webkit-scrollbar-thumb {
         background: rgba(0, 0, 0, 0.3);
         border-radius: 30px;
      }
      ul {
         width: 100%;
         border-left: 1px solid #6f6f6f;
         padding-bottom: 80px;
         li {
            display: flex;
            justify-content: flex-start;
            position: relative;
         }
         li::before {
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background-color: #f5d20e;
            content: '';
            position: absolute;
            top: 0;
            left: -7px;
         }
         .period {
            width: 23%;
            font-size: 1rem;
            letter-spacing: 1px;
            color: #d6d6d6;
            margin: 0 30px;
         }
         .title {
            font-size: 1.3rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-bottom: 10px;
         }
         .smallTitle {
            font-size: 1rem;
            margin-bottom: 15px;
            color: #d8d8d8;
         }
         .detail {
            color: #b6b6b6;
            p {
               font-size: 1rem;
               padding: 2px 5px;
               word-break: keep-all;
            }
         }
         a {
            color: #b6b6b6;
            margin-top: 15px;
            display: block;
            font-weight: 700;
         }
      }
   }
`;

export default InfoTab;
