import React from 'react';


import Product from './components/product';
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
  const product = data.map( item => 
    <Product 
    key={item.id}
   {...item}
    />
    )
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
        <Route path='/product'  element={product} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />  */}
    </Routes>
    <Footer/>
    </Router>
  ); 
}

export default App;