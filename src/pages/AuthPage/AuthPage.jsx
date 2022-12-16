import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className = "AuthPage">
      <div>
      <h1 className = "Title">𝓣𝓡𝓔𝓐𝓢𝓤𝓡𝓔 𝓒𝓗𝓔𝓢𝓣</h1>
      </div>
      <button className = "Button" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}