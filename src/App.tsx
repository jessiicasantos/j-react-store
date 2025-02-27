import './App.css';
import Arrivals from './components/Arrivals';
import BestSeller from './components/BestSeller';
import Logos from './components/Logos';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import ShopCollection from './components/ShopCollection';
import Promotions from './components/Promotions';
import IconCards from './components/IconCards';
import Socials from './components/Socials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Logos />
        <Arrivals />
        <ShopCollection />
        <BestSeller />
        <Promotions />
        <IconCards />
        <Socials />
        <Newsletter />
        <Footer />
        {/* <Dropdown /> */}
        {/* <Outlet /> */}
      </div>
    </>
  )
}

export default App;
