import React from "react";
import Logo from "../../assets/images/logo.png";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <div className="wrapper">
        <div>Home</div>
        <div>Place to stay</div>
        <div>NFTs</div>
        <div>Community</div>
      </div>
      <button>Connect Wallet</button>
    </header>
  );
};

export default Header;
