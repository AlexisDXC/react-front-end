import React from 'react';
import Navbar from './components/Navbar';
import Hero from './Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';
import Home from './pages/Home';

import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import TestRegister from './pages/TestRegister';
import TestPage from './pages/TestPage';
import Upload  from './pages/Upload';
import Dashboard  from './pages/Dashboard';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Sidebar />
      <Submenu />  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='testregister' element={<TestRegister />} />   
        <Route path='dashboard' element={<Dashboard />} />   
        <Route path='upload' element={<Upload />} />   
        <Route path='*' element={<Home/>} />
 
      </Routes>
    </Router>
    </>
  );
}

export default App;
