import React from 'react';


import Card from './components/card';
import Products from './components/products';
import Footer from './components/vitals/footer';
import Header from './/components/vitals/Header';
import data from './data'
import Home from './components/Home';
import Cart from './components/cart';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';

function App() {
const {products} = data;

const [cartItems, setCartItems] = React.useState([]);
const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

  return (
    
    // <div className="App">
    //   <Header/>
    //   {card}
    //   <Footer />
    // </div>

    <Router>
    <Header />
    <Routes>
  
        <Route path='/' element={<Home/>} />
        <Route path='/products'  element={<Products TheProducts={products} onAdd={onAdd} />} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />  */}
    </Routes>
    <Footer/>
    </Router>
  ); 
}

export default App;


