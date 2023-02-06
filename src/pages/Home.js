import styled from 'styled-components';
import Loading from '../components/common/Loading';
import Cover from '../components/cover/Cover';
import About from './About';
import Contact from './Contact';
import Work from './Work';

const Home_page = () => {
   return (
      <>
         <Loading />
         <Cover />
         <About />
         <Gap />
         <Work />
         <Gap />
         <Contact />
      </>
   );
};

const Gap = styled.div`
   width: 100%;
   height: 150px;
`;

export default Home_page;
