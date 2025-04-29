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
import NotFoundPage from "./pages/NotFoundPage";



function App()
{
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/reference" element={<ReactReference />} />
        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
