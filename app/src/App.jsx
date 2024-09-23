import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ting from './assets/Screenshot (4).png'
import "bootstrap/dist/css/bootstrap.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Header } from './component/Header'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import {firebaseConfig} from './config/Config';
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";





function App() {
  const FirebaseApp = initializeApp( firebaseConfig )
  const FirebaseAuth = getAuth( FirebaseApp)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } /> 
        <Route path="/Signup" element ={ <Signup/> } />
      </Routes>
    </>
  )
}

export default App
