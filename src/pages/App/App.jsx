import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CartPage from '../CartPage/CartPage';
import DonatePage from '../DonatePage/DonatePage';
import CommentsPage from '../CommentsPage/CommentsPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import * as toysAPI from '../../utilities/toys-api';
import * as CommentsAPI from '../../utilities/comments-api';
import * as donationAPI from '../../utilities/donations-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [toys, setToys] = useState([]);
  const [cart, setCart] = useState([]);
  const [comments, setComments] = useState([]);
  const [donations, setDonations] = useState([]);

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

  async function handleNewComment(comment) {
    const newComment = await CommentsAPI.addComment(comment);
    setComments([...comments,newComment]);
  }

  async function addDonation() {
    // const newDonation = await donationAPI.create(donations)
    // setDonations([...donations, newDonation]);
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
              <Route path="/comments" element={<CommentsPage handleNewComment={handleNewComment}/>} />
              <Route path="/" element={<HomePage toys={ toys } setToys={ setToys } addItemtoCart={addItemtoCart}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
