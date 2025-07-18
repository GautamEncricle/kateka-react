import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';
import Stay from './pages/Stay.jsx';
import StaySingle from './pages/StaySingle.jsx';
import Safari from './pages/Safari.jsx';
// import Wellness from './pages/Wellness.jsx';
// import Experiences from './pages/Experiences.jsx';
import Offers from './pages/Offer.jsx';
import Location from './pages/Location.jsx';
import Gallery from './pages/Gallery.jsx';
import Rates from './pages/Rates.jsx';
import FAQ from './pages/Faq.jsx';
import Dining from './pages/Dining.jsx';
import Contact from './pages/Contact.jsx';
import Conservation from './pages/Conservation.jsx';
import Campaign from './pages/CampaignLP.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
// import Booking from './pages/Booking.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/stay/:id" element={<StaySingle />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/wellness" element={<About />} />
        <Route path="/experiences" element={<Gallery />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conservation" element={<Conservation />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Rates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
