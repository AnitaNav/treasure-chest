import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CartPage from '../CartPage/CartPage';
import DonatePage from '../DonatePage/DonatePage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import * as toysAPI from '../../utilities/toys-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [toys, setToys] = useState([]);
  const [cart, setCart] = useState([]);

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
  //   const addToy = toys.filter(function (toy) {
  //     if (toy._id === id) return toy;
  //   })
  //   setCart([...cart, ...addToy]);
  //   const updatedToys = toys.filter(function (toy) {
  //     if (toy._id !== id) return toy;
  //   })
  //   setToys(updatedToys);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} removeItemtoCart={removeItemtoCart}/>} />
              <Route path="/donates" element={<DonatePage />} />
              <Route path="/" element={<HomePage toys={ toys } setToys={ setToys } addItemtoCart={addItemtoCart}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
