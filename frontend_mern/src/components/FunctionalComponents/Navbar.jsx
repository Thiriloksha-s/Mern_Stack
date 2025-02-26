import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setopen] = useState(false);
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

        <div
          className="dropdown"
          onMouseEnter={() => setOpen(!isOpen)}
          onMouseLeave={() => setOpen(!isOpen)}
        >
          <span>Hooks</span>
          {isOpen && (
            <ol className="dropdown1">
              <li>
                <Link to="/use-state">UseState</Link>
              </li>
              <li>
                <Link to="/use-effect">UseEffect</Link>
              </li>
              <li>
                <Link to="/use-effect-api">UseEffectAPI</Link>
              </li>
              <li>
                <Link to="/use-ref">UseRef</Link>
              </li>
              <li>
                <Link to="/use-memo">UseMemo</Link>
              </li>
              <li>
                <Link to="/use-callback">UseCallBack</Link>
              </li>
              <li>
                <Link to="/use-memoize">UseMemoize</Link>
              </li>
            </ol>
          )}
        </div>
        <li>
          <Link to="/hoc">HoC</Link>
        </li>
        <div
          className="dropdown"
          onMouseEnter={() => setopen(!open)}
          onMouseLeave={() => setopen(!open)}
        >
          <span>Memoization</span>
          {open && (
            <ol className="dropdown1">
              <li>
                <Link to="/memo">Memo</Link>
              </li>

              <li>
                <Link to="/lazy">LazyLoadingAndSuspense</Link>
              </li>
            </ol>
          )}
        </div>
        <li>
          <Link to="/res">ContextAPI</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
