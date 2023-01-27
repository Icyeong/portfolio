import styled from 'styled-components';
import { MainWrapper } from '../styles';
import Introduction from '../components/about/Introduction';
import InfoTab from '../components/about/InfoTab';

const About = () => {
   return (
      <AboutWarpper>
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
`;

export default About;
