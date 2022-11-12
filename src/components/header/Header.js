import React from "react";
import { Logo } from "../../assets/images/";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <div className="wrapper">
        <Link to="/">Home</Link>
        <Link to="/place-to-stay">Place to stay</Link>
        <Link to="/">NFTs</Link>
        <Link to="/">Community</Link>
      </div>
      <button>Connect Wallet</button>
    </header>
  );
};

export default Header;
