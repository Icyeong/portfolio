import styled from 'styled-components';
import { MainWrapper } from '../../styles';
import InfoTab from './InfoTab';
import Introduction from './Introduction';

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
