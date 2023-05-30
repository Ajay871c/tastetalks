import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
// import Logo from "../img/logo.png";
import Taste from "../img/taste.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Taste} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=authentic">
            <h6>AUTHENTIC</h6>
          </Link>
          <Link className="link" to="/?cat=traditional">
            <h6>TRADITIONAL</h6>
          </Link>
          <Link className="link" to="/?cat=chinese">
            <h6>CHINESE</h6>
          </Link>
          <Link className="link" to="/?cat=recipe">
            <h6>RECIPE</h6>
          </Link>
          {/* <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link> */}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
