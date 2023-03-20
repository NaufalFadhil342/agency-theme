import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navigation/navbar';
import Footer from './Components/footer/footer';

const Home = lazy(() => import('./Page/Home/home'));
const Services = lazy(() => import('./Page/Services/services'));
const About = lazy(() => import('./Page/About/about'));
const Portfolio = lazy(() => import('./Page/Portfolio/portfolio'));
const Contact = lazy(() => import('./Page/Contact/contact'));

function App() {
  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <Navbar />
      <Suspense fallback={<h1 style={{ margin: '8rem 0', textAlign: 'center' }}>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
