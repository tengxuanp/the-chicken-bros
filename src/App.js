import React, { useEffect, useState } from 'react';
import { Header, About, Menu, Faq, Contact } from './container';
import { Navbar, SubHeading, Products, NavbarMerch, Cart, Checkout } from './components';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { commerce } from './lib/commerce'

import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response);
  }

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response);
  }

  const refreshCart = async () => {
    const response = await commerce.cart.refresh();
    setCart(response);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])

  const App = () => useRoutes([
    {path: "/", element:
    <>
    <Navbar />
    <Header />
    <SubHeading />
    <About />
    <Menu />
    <Faq />
    <Contact />
    </> 
    },

    {path: "/the-chicken-bros", element:
    <>
    <Navbar />
    <Header />
    <SubHeading />
    <About />
    <Menu />
    <Faq />
    <Contact />
    </> 
    },

  {path: "/products", element: <><NavbarMerch totalItems={cart.total_items} /><Products products={products} onAddToCart={handleAddToCart} /></> },

  {path: "/cart", element:
  <>
  <NavbarMerch totalItems={cart.total_items} />
  <Cart 
    cart={cart}
    handleUpdateCartQty={handleUpdateCartQty}
    handleRemoveFromCart={handleRemoveFromCart}
    handleEmptyCart={handleEmptyCart}
   />
  
  </>},

  {path: "/checkout", element: 
    <Checkout 
      cart={cart}
      order={order}
      onCaptureCheckout={handleCaptureCheckout}
      error={errorMessage}
       /> },

  ])

  return (
    <Router>
      <App />
    </Router>
  );
}

export default App;
