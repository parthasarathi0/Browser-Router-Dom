import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigation = useNavigate();
let handleClick = ()=>{
    navigation("/About")
}
  return (
    <nav>
      <h1>Brand</h1>
      <ul>
        <Link to="/">Home</Link>
        {/* <Link to="/About">About</Link> */}
        <li
          onClick={handleClick}
        >
          about
        </li>
        <Link to="/User">User</Link>
        <Link to="/Location">Location</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
