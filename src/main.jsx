import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ReactReference from './ReactRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/raytsang.com/'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reference" element={<ReactReference /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
