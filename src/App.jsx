import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { useState } from 'react';
import './index.css';
import ReactReference from './ReactRef.jsx';
import Profile from './pages/Profile.jsx';  // Import Profile component
import Settings from './pages/Settings.jsx';  // Import Settings component
import Home from './pages/Home.jsx'; //  Home component
import PageContent from './components/PageContent.jsx';



function App()
{
  const [count, setCount] = useState(0)

  return (
   
      <Routes>
        <Route path="*" element={<MainLayout />} />
        <Route path="/reference" element={<ReactReference />} />

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
   
  );
}

export default App
