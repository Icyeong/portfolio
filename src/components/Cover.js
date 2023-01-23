import styled from 'styled-components';
import { MainWrapper } from '../styles';

const Cover = () => {
   return (
      <CoverWarpper>
         <h1>Cover입니다.</h1>
      </CoverWarpper>
   );
};

const CoverWarpper = styled(MainWrapper)`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
`;

export default Cover;
