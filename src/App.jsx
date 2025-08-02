import { createContext, useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Product from './pages/Product';
import status from './data/status.json';
import Classes from './pages/Classes';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Order from './pages/Order';
import AdminPage from './pages/AdminPage';
import Cart from './pages/Cart';

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(status);
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ Load from localStorage on app start
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    const storedCart = localStorage.getItem('cart');

    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // ✅ Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const toggleCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart, setCart,
        wishlist, setWishlist,
        toggleWishlist,
        toggleCart,
        search, setSearch,
        user, setUser,
        searchQuery, setSearchQuery,
      }}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
