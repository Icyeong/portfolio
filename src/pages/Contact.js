import styled from 'styled-components';
import Collection from '../components/contact/Collection';
import FormSection from '../components/contact/FormSection';
import { MainWrapper } from '../styles';

const Contact = () => {
   return (
      <ContactWarpper>
         <FormSection />
         <Collection />
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
