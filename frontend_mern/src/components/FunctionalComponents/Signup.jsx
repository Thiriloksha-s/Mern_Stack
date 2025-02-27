import React from 'react'
import "../css/Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useState} from "react"
import axios from 'axios'

const Signup = () => {
  const navigate=useNavigate();
  const [firstName,setFN]=useState("");
  const [lastName,setLN]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
  const [phoneNumber,setPN]=useState(0);

  const handleSignup=async(event)=>{
      event.preventDefault()
      const req=await axios.post("https://mern-stack-11rb.onrender.com/signup",{
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phoneNumber:phoneNumber
      })
      const message=req.data.message
      const isSignUp=req.data.isSignUp
      if(isSignUp){
          alert(message)
          navigate("/login")
      }else{
          alert(message)
      }
  }

  return (
    <div className="User">
        <h3 className='font'>Sign Up</h3>
        <form onSubmit={handleSignup}>
            <div className="FormInput">
                <label htmlFor="firstname">Firstname:</label>
                <input type="text" id="firstname" value={firstName} onChange={e=>setFN(e.target.value)} placeholder="Enter your Firstname" required/>

                <label htmlFor="lastname">Lastname:</label>
                <input type="text" id="lastname" value={lastName} onChange={e=>setLN(e.target.value)} placeholder="Enter your Lastname"  required/>

                <label>Email:</label>
                <input type="email" id="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email"  required/>

                <label>Password:</label>
                <input type="password" id="Password" value={password} onChange={e=>setPass(e.target.value)} placeholder="Enter your Password"  required/>


                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="number" id="PhoneNumber" value={phoneNumber} onChange={e=>setPN(parseInt(e.target.value))} placeholder="Phone Number"  required/>

                <button type="submit" class="btn">Sign Up</button>
            </div>
        </form>
        <div className='login'>
            <p>Already have an account?</p>
            <Link to="/login" type="submit" className="loginbtn">Login</Link>
        </div>
    </div>
  )
}

export default Signup