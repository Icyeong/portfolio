import styled from 'styled-components';
import { MainWrapper } from '../styles';
import Introduction from '../components/about/Introduction';
import InfoTab from '../components/about/InfoTab';
import Loading from '../components/common/Loading';

const About = () => {
   return (
      <AboutWarpper>
         <Loading />
         <Introduction />
         <InfoTab />
      </AboutWarpper>
   );
};

const AboutWarpper = styled(MainWrapper)`
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   position: sticky;
   top: 0px;
   background-color: #1d1d1d;
`;

export default About;
