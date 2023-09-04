import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import ShopNow from './components/ShopNow';
import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import CheckEmail from './components/CheckEmail';
import ForgotPass from './components/ForgotPass';
import Register from './components/Register';



// https://fiuce-store-demo.myshopify.com/

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/check_email' element={<CheckEmail />} />
          <Route path='/forgot_password' element={<ForgotPass />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/shopNow" element={<ShopNow />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
