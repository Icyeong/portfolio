import styled from 'styled-components';
import Loading from '../components/common/Loading';
import DisplayBoard from '../components/work/DisplayBoard';
import ProjectNav from '../components/work/ProjectsNav';
import { MainWrapper } from '../styles';

const Work = () => {
   return (
      <WorkWarpper>
         <Loading />
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
   /* position: sticky; */
   top: 0px;
   background-color: #1d1d1d;
`;

export default Work;
