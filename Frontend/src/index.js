import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider
  clientId='997777027941-c1nuf2gpt7mv0tss11qkr8p6dpqpi7hg.apps.googleusercontent.com'
  >
    <App />
  </GoogleOAuthProvider>
</React.StrictMode>
);