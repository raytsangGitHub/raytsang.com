import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { useState } from 'react';
import './index.css';
import ReactReference from './ReactRef.jsx';
//import Profile from './pages/Profile.jsx';  // Import Profile component
//import Settings from './pages/Settings.jsx';  // Import Settings component
import Home from './pages/HomePage.jsx'; //  Home component
//import PageContent from './components/PageContent.jsx';
import NotFoundPage from "./pages/NotFoundPage";

// Import Top bar pages:
import Skills from './pages/SkillsPage.jsx';
import WorkExperiences from './pages/WorkExperiencesPage.jsx';
import Projects from './pages/ProjectsPage.jsx';
import Resume from './pages/ResumePage.jsx';
import ContactMe from './pages/ContactMePage.jsx';

function App()
{
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/*
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/reference" element={<ReactReference />} />*/}

          {/* TopBar links*/}
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work-experiences" element={<WorkExperiences />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contactMe" element={<ContactMe />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    
  );
}

export default App
