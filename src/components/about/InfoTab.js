import styled from 'styled-components';
import Experience from './Experience';
import Stacks from './Stacks';
import { useState } from 'react';

const InfoTab = () => {
   const [activeBtn, setActiveBtn] = useState('stack');
   return (
      <Wrapper>
         <BtnWrapper>
            <button onClick={() => setActiveBtn('stack')} className={activeBtn === 'stack' && 'active'}>
               Stack
            </button>
            <button onClick={() => setActiveBtn('exp')} className={activeBtn === 'exp' && 'active'}>
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
   &::after {
      content: '';
      width: 100%;
      height: 100vh;
      background-color: #2e2e2e;
      position: absolute;
      top: 55px;
      left: 100px;
      transform: skewX(0.3deg) rotateZ(-7deg);
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
   }
`;

const BtnWrapper = styled.div`
   width: fit-content;
   display: flex;
   margin: 55px 0 0 110px;
   transform: rotateZ(-7deg);
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
   width: 75%;
   height: calc(100vh - 170px);
   position: absolute;
   top: 170px;
   left: 190px;
   z-index: 1;
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
            width: 100px;
            height: 100px;
            border-radius: 5px;
            background-color: lightgray;
            margin-bottom: 10px;
         }
      }
      @media screen and (max-width: 1750px) {
         grid-template-columns: repeat(4, 1fr) !important;
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
         padding-bottom: 40px;
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
            font-size: 1rem;
            letter-spacing: 1px;
            color: #d6d6d6;
            margin: 0 30px;
         }
         .title {
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin-bottom: 15px;
         }
         .detail {
            color: #b6b6b6;
            p {
               font-size: 0.95rem;
               padding: 2px 5px;
            }
         }
      }
   }
`;

export default InfoTab;
