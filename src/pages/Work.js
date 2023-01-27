import styled from 'styled-components';
import DisplayBoard from '../components/work/DisplayBoard';
import ProjectNav from '../components/work/ProjectsNav';
import { MainWrapper } from '../styles';

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
