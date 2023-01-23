import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/common/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import { MainWrapper, PageWrapper } from './styles';

function App() {
   return (
      <PageWrapper>
         <BrowserRouter>
            <Navbar />
            <MainWrapper>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/contact" element={<Contact />} />
               </Routes>
            </MainWrapper>
         </BrowserRouter>
      </PageWrapper>
   );
}

export default App;
