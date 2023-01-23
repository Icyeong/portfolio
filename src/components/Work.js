import styled from 'styled-components';
import { MainWrapper } from '../styles';

const Work = () => {
   return (
      <WorkWarpper>
         <h1>Work입니다.</h1>
      </WorkWarpper>
   );
};

const WorkWarpper = styled(MainWrapper)`
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
`;

export default Work;
