import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Home from './Components/Home';
import Settings from './Components/Settings';
import About from './Components/About';
import Layout from './Components/Layout';
import Gender from './Components/Gender';
import Laptop from './Components/Laptop';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/about' element={<About />}>About</Route>
          <Route path='/settings' element={<Settings />}>Settings</Route>
          <Route path='/gender' element={<Gender />} >Gender</Route>
          <Route path='/laptop' element={<Laptop />} >Laptop</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
