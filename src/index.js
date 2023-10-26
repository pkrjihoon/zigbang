import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jihoon from './jihoon/index'
import Seonhee from './seonhee/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Seonhee />
    <Jihoon />
  </React.StrictMode>
);

