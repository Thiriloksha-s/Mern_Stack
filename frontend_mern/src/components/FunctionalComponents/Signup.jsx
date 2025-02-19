import React from 'react'
import "../css/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="User">
        <h3 className='font'>Sign Up</h3>
        <form>
            <div className="FormInput">
                <label>Firstname:</label>
                <input type="text" id="Firstname" placeholder="Enter your Firstname"/>

                <label>Lastname:</label>
                <input type="text" id="Lastname" placeholder="Enter your Lastname"/>

                <label>Email:</label>
                <input type="email" id="Email" placeholder="Enter your Email"/>

                <label>Password:</label>
                <input type="text" id="Password" placeholder="Enter your Password"/>

                <label>Confirm Password:</label>
                <input type="text" id="CnfPassword" placeholder="Confirm Password"/>

                <button type="submit" class="btn">Sign Up</button>
            </div>
        </form>
        <div className='login'>
            <p>Already have an account?</p>
            <Link to="/login" type="submit" class="loginbtn">Login</Link>
        </div>
    </div>
  )
}

export default Signup