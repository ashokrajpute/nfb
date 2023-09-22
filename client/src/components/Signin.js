import React, { useState } from 'react'
import loginimg from "./loginimg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();
  var [userinfo,setuserinfo]=useState({
    email:"",
    password:""
  });

  function Userdata(e){
    console.log(e.target.name);
    console.log(e.target.value);
    var {name,value}=e.target;
    if(name==="email"){
     setuserinfo((prevdata)=>{
      return {
       email:value,
       password:prevdata.password
      }
     })
 
    }
    else{
     setuserinfo((prevdata)=>{
       return {
        email:prevdata.email,
        password:value
       }
      })
    }
   }


   var handleLogin=async (e)=>{
    console.log(userinfo)
    e.preventDefault();
 var {email,password}=userinfo;
 console.log(email+" "+password);
 if(!email.includes("@gmail.com")||email.length<11){
  window.alert("enter a valid email");
  return;
 }
 if(password.length==0){
  window.alert("plz enter password");
  return;
 }
 
 var data={
  username:email,
  password:password
 };
console.log("==",data);
  var d=await axios.post('/login', data,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
);
console.log("===========[]========")
console.log("load+=",d.data);
  setuserinfo({
    email:"",
    password:""
  });
 
 if(d.data=="u r login"){
  window.alert("u r login");
  navigate("/");
  
 }
 else{
  window.alert(d.data);
  return;
 } 
 
 

  }

  var authgoogle=async()=>{
var d=await axios.get('/auth/google');
  if(d.data=='u r login'){
    window.alert("logined");
    navigate('/');
  }
  else{
    window.alert("not logined");
    return;
  }

  }

  return (
    <div className='sign'>
    <div className='form-flex'>
      <div className='form-left'>
        <form method='POST' className='form-cont'>
        <div  className='form-div'>
          <input type='email' placeholder='Enter Email' name="email" className='form-ele' value={userinfo.email}onChange={Userdata}></input>
         </div>
         <div className='form-div'>
          <input type='password' placeholder='Enter Password' name="password" className='form-ele' value={userinfo.password}onChange={Userdata}></input>
         </div>
          <div className='form-div'>
          <button type='submit' className='form-btn-login' onClick={handleLogin}>Login</button>
         </div>
         {/* <div className='form-div'>
         <button className='form-btn-login'>LOGIN WITH GOOGLE</button>
         </div> */}
         
         </form>
         <p className='form-or'>OR</p>
         <div className='form-div-google'>
          <a  className='form-google'>LOGIN WITH GOOGLE</a>
         </div>
        </div>
          <div className='form-img'>
         <img src={loginimg} className='img-form'/>
         </div>
    </div>
    </div>
  )
}
