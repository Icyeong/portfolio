import styled from 'styled-components';
import { MainWrapper } from '../styles';

const Contact = () => {
   return (
      <ContactWarpper>
         <h1>Contact입니다.</h1>
      </ContactWarpper>
   );
};

const ContactWarpper = styled(MainWrapper)`
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
`;

export default Contact;
