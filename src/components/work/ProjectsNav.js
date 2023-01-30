import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { projects } from '../../atoms';
import CreateNav from './CreateNav';

const ProjectNav = () => {
   const project_data = useRecoilValue(projects);
   return (
      <Wrapper>
         <div className="temp"></div>
         <nav>
            <div className="inner-container">
               {project_data.map((data, idx) => (
                  <CreateNav data={data} key={idx} />
               ))}
            </div>
         </nav>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   min-width: 35%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   overflow-y: hidden;
   .temp {
      height: 200px;
   }
   nav {
      height: calc(100vh - 200px);
      padding: 20px 20px 70px;
   }
   .inner-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
   }
   .inner-container::-webkit-scrollbar {
      display: none;
   }
`;

export default ProjectNav;
