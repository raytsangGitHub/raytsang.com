import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { useState } from 'react'
import './index.css'


function App()
{
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
       
      </Route>

    </Routes>
    
  );
}

export default App
