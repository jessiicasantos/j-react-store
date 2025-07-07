import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Cart />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
