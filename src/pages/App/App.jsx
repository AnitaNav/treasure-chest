import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CartPage from '../CartPage/CartPage';
import DonatePage from '../DonatePage/DonatePage';
import PostPage from '../PostsPage/PostPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import * as toysAPI from '../../utilities/toys-api';
import * as PostsAPI from '../../utilities/posts-api';
import * as donationAPI from '../../utilities/donations-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [toys, setToys] = useState([]);
  const [cart, setCart] = useState([]);
  const [posts, setPosts] = useState([]);
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getToys() {
      console.log('getalltoys')
      let allToys = await toysAPI.getAll();
      console.log(allToys)
      setToys(allToys)
    }
    getToys();
  }, []);

  async function addItemtoCart(id) {
    console.log( id,'add item to cart');
    const addToy = toys.filter(function (toy) {
      if (toy._id === id) return toy;
    })
    setCart([...cart, ...addToy]);
    const updatedToys = toys.filter(function (toy) {
      if (toy._id !== id) return toy;
    })
    setToys(updatedToys);
  }

  async function removeItemtoCart(id) {
    console.log( id,'remove item to cart');
    const removeCartItem = cart.filter(function (cartItem) {
      if (cartItem._id === id) return cartItem;
    })
    setToys([...toys, ...removeCartItem]);
    const updatedCart = cart.filter(function (cartItem) {
      if (cartItem._id !== id) return cartItem;
    })
    setCart(updatedCart);
  }

  async function handleNewPost(evt, newPostData) {
    const newPost = await PostsAPI.addPost(newPostData);
    setPosts([...posts,newPost]);
  }

  async function addDonation(evt, newDonationData) {
    evt.preventDefault();
    const newDonation = await donationAPI.createDonation(newDonationData)
    setDonations([...donations, newDonation]);
    navigate('/');
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} removeItemtoCart={removeItemtoCart}/>} />
              <Route path="/donates" element={<DonatePage addDonation={addDonation}/>} />
              <Route path="/posts" element={<PostPage handleNewPost={handleNewPost}/>} />
              <Route path="/" element={<HomePage toys={ toys } setToys={ setToys } addItemtoCart={addItemtoCart}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
