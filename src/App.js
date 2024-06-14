import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import banner_kid from './components/Assets/banner_kids.png';
import banner_men from './components/Assets/banner_mens.png';
import banner_women from './components/Assets/banner_women.png';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/navbar';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={banner_men} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kid} category="kid"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
