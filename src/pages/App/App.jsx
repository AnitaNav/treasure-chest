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
import * as postsAPI from '../../utilities/posts-api';
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
      let allToys = await toysAPI.getAll();
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
    evt.preventDefault();
    const newPost = await postsAPI.addPost(newPostData);
    setPosts([...posts,newPost]);
    navigate('/posts');
  }

  async function handleDeletePost(id) {
    await postsAPI.deletePosts(id);
    const existingPost = posts.filter(post => post._id !== id);
    setPosts(existingPost);
  } 

  async function handleUpdatePost(postFormData, id) {
    const updatePost = await postsAPI.updatePost(postFormData, id);
    const posts = await postsAPI.getAllPosts();
    setPosts(posts);
    navigate('/posts');
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
              <Route path="/posts" element={<PostPage handleNewPost={handleNewPost} posts={posts} setPosts={setPosts} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost}/>} />
              <Route path="/" element={<HomePage toys={ toys } setToys={ setToys } addItemtoCart={addItemtoCart}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
