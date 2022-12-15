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

  useEffect(function () {
    async function getToys() {
      console.log('getalltoys')
      let allToys = await toysAPI.getAllToys();
      console.log(allToys)
      setToys(allToys)
    }
    getToys();
  }, []);


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/donates/new" element={<CartPage />} />
              <Route path="/donates" element={<DonatePage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
