import React from 'react'
import '../css/Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="User">
        <h3 className='font'>Login</h3>
        <form>
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