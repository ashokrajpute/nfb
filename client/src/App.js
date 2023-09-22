import Banner from './components/Banner';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Lists from './components/Lists';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Trending from './components/Trending';
import Notfound from './components/Notfound';

import { Routes, Route } from "react-router-dom";
import React from "react"
import './App.css';

function App() {
  return (
    <div className='outer-div'>
   <Navbar/>
   <Routes>
       
        <Route exact path='/'element={< Lists />} />
        <Route  path="/favourites" element={<Favourites/>} />
        <Route path="/contact" element={ <Logout/> } />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={  <Signup/> } />
        <Route path="/trending" element={ <Trending/>} />
        <Route path="/logout" element={ <Logout/>} />
        <Route path="*" element ={<Notfound/>}/>
      </Routes>
   <Footer/>
   
   </div>
  );
}

export default App;
