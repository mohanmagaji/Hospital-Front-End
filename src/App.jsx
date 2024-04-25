import React, { useContext, useEffect } from 'react'
import "./Main.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homee from './pages/Homee'
import Appointment from './pages/Appointment';
import Register from './pages/Register';
import Login from './pages/Login';
import Aboutus from './pages/Aboutus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { Context } from './main';
import axios from 'axios';
import Bottom from './components/Bottom';

  

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
  useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/patient/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  };
  fetchUser();
}, [isAuthenticated]);

  return (
    <>

      <Router>
    <Navbar/>
        <Routes>

          <Route path="/" element={<Homee/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Bottom/>
        <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
