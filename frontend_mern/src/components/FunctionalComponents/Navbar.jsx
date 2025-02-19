import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/Dropdown.css'
const Navbar = () => {
  const [isOpen, setOpen]=useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        {/*<div>
          <span>Hooks</span>
          <ol>
            <li>
              <Link to="/use-state">UseState</Link>
            </li>
            <li>
              <Link to="/use-effect">UseEffect</Link>
            </li>
          </ol>
        </div>
        <li>*/}
          <li className="dropdown" onMouseEnter={()=>setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <span>Hooks</span>
            {isOpen && (
              <ol className="dropdown1">
                <li>
                  <Link to="/use-state">UseState</Link>
                </li>
                <li>
                  <Link to="/use-effect">UseEffect</Link>
                </li>
              </ol>
            )}
          </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
