import Navbar from './components/Navbar';
import React from 'react';
import  { useState,useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Homescreen from './components/Homescreen';
import BookingComponent from './components/BookingComponent';
import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Landing from './components/Landing';
// import axios from 'axios';
const App = () => {
  
  

  return (
    
    <div>
      
      <Navbar/>
      

      
      {/* <h2>Data from Server:</h2>
      <h1>{data.length}</h1> */}
      {/* <Homescreen/> */}
      
      <Routes>
        
      <Route path="/home" element={<Homescreen />} /> 
        <Route path='/booking/:roomid/:fromdate/:todate' element={<BookingComponent/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<Landing/>}/>

      </Routes>
    {/* </BrowserRouter> */}
    </div>
    
  );
};

export default App;