import styled from 'styled-components';
import Loading from '../components/common/Loading';
import Collection from '../components/contact/Collection';
import FormSection from '../components/contact/FormSection';
import { MainWrapper } from '../styles';

const Contact = () => {
   return (
      <ContactWarpper>
         <Loading />
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
   background-color: #1d1d1d;
   z-index: 10;
`;

export default Contact;
