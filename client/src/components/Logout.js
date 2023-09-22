import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';
export default function Logout() {
  const navigate = useNavigate();
   useEffect(()=>{
  var c=cookie.get('ashokcookies');
  console.log(c);
  if(c==undefined||c.length<9){
    navigate('/signin');
  }

   },[]);


  var handlelogout=async ()=>{
  var d=await axios.post('/logout');
  console.log(d);
  if(d.data==="Logout")navigate('/');
  else{
    window.alert("cant able to logout");
  }

  }
  var handlehome=async ()=>{
    navigate('/');
  }

  return (
    <div className='sign'>
    <div className='form-flex'>
     
        
      
      <button onClick={handlelogout} style={{width:'90%'}}>Logout</button>
      
      <button onClick={handlehome} style={{width:'90%'}}>Home page</button>
  
    </div>
    </div>


   
  )
}
