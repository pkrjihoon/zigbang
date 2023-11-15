import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jihoon from './pages/jihoon/index.jsx'
import Seonhee from './pages/seonhee/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Seonhee />
    <Jihoon />
  </React.StrictMode>
);

