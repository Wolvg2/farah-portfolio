import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './pages/Welcome.tsx'
import './index.css'   
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import BackgroundDesign from './pages/BackgroundDesign.tsx';
import CharacterDesign from './pages/CharacterDesign.tsx';
import DEnvironment from './pages/DEnvironment.tsx';
import DCharacter from './pages/DCharacter.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

import MainLayout from "./layouts/MainLayout.tsx";
import EmptyLayout from "./layouts/EmptyLayout.js";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmptyLayout><Welcome /></EmptyLayout>} /> 
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/background-design" element={<MainLayout><BackgroundDesign /></MainLayout>} />
        <Route path="/character-design" element={<MainLayout><CharacterDesign /></MainLayout>} />
        <Route path="/d-environment" element={<MainLayout><DEnvironment/></MainLayout>} />
        <Route path="/d-character" element={<MainLayout><DCharacter/></MainLayout>} />
        <Route path="/about" element={  <MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact/></MainLayout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
