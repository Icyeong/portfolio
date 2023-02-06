import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'aos/dist/aos.css';
import Navbar from './components/common/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import { PageWrapper } from './styles';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
   useEffect(() => {
      Aos.init();
   }, []);
   return (
      <PageWrapper>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/work" element={<Work />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </BrowserRouter>
      </PageWrapper>
   );
}

export default App;
