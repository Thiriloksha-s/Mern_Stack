import React from 'react'
import '../css/Login.css'
import { Link } from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
  const handleLogin=async(event)=>{
    event.preventDefault()
    const req=await axios.post("https://mern-stack-11rb.onrender.com/login",{
       email,
       password
    })
    // const message=req.data.message
    const isLoggedin=req.data.isLoggedin
    if(isLoggedin){
        alert(message)
        navigate("/")
    }else{
        alert(message)
        navigate("/signup")
    }
}

  return (
    <div className="User">
        <h3 className='font'>Login</h3>
        <form onSubmit={handleLogin}>
            <div className="FormInput">
                <label>Email:</label>
                <input type="email" id="Email" placeholder="Enter your Email"/>

                <label>Password:</label>
                <input type="password" id="Password" placeholder="Enter your Password"/>
                <button type="submit" class="btn">Login</button>
            </div>
        </form>
        <div className='signup'>
            <p>Don't have an account?</p>
            <Link to="/signup" type="submit" class="signupbtn">SignUp</Link>
        </div>
    </div>
  )
}

export default Login