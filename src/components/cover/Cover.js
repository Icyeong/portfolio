import styled from 'styled-components';
import { MainWrapper } from '../../styles';
import CoverBg from './CoverBg';

const Cover = () => {
   return (
      <CoverWarpper>
         <CoverBg />
         <div className="cover-txt">
            <ul className="main-txt">
               <li>Y</li>
               <li>E</li>
               <li>O</li>
               <li>N</li>
               <li>G</li>
            </ul>
            <span>PORTFOLIO</span>
         </div>
      </CoverWarpper>
   );
};

const CoverWarpper = styled(MainWrapper)`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   margin-left: 0;
   width: 100%;
   user-select: none;
   .cover-txt {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   .main-txt {
      display: flex;
   }
   li {
      font-size: 9.3rem;
      font-family: 'Keania One', cursive;
      color: #b8e829;
      padding: 0 10px;
      position: relative;
   }
   li:nth-child(3)::before,
   li:nth-child(3)::after {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      height: 0px;
      border-bottom: 27px solid #b8e829;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      top: calc(50% - 0.33em);
      transform: translate(0, -50%) rotate(-33.6deg);
   }
   li:nth-child(3)::before {
      left: 11px;
   }
   li:nth-child(3)::after {
      right: 11px;
      transform: translate(0, -50%) rotate(33.6deg);
   }
   span {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 2px;
   }
`;

export default Cover;
