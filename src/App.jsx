import Login from './pages/Login.jsx';
import NavBar from './components/NavBar.jsx';
import ChatRoom from "./pages/ChatRoom.jsx";
import JobPortal from './pages/JobPortal.jsx';
//import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginF from "./components/loginF";
import Signup from "./components/signup";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
        <Route path="/" element={<LoginF />} />
             
             <Route path="/login" element={<LoginF />} />
             <Route path="/googleacc" element={<Login />} />
            
             <Route path="/signup" element={<Signup />} />
             <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
          <Route path="/research-opportunities" element={<PrivateRoute><JobPortal /></PrivateRoute>} />
       
        </Routes>
       
        <ToastContainer />

      </AuthProvider>
      
    </>
  )
}

export default App

