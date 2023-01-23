import styled from 'styled-components';
import { MainWrapper } from '../styles';

const About = () => {
   return (
      <AboutWarpper>
         <h1>About입니다.</h1>
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
