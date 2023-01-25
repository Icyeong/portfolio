import styled from 'styled-components';
import { MainWrapper } from '../../styles';
import DisplayBoard from './DisplayBoard';
import ProjectNav from './ProjectsNav';

const Work = () => {
   return (
      <WorkWarpper>
         <DisplayBoard />
         <ProjectNav />
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
