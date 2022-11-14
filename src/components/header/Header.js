import React, { useState } from "react";
import { Logo } from "../../assets/images/";
import { Link } from "react-router-dom";
import "./header.scss";
import Modal from "../modal/Modal";
const Header = () => {
  const [open, setOpen] = useState(false);
  const body = document.querySelector("body");
  const showModal = () => {
    setOpen(true);

    body.style = `overflow-y:hidden`;
  };
  const closeModal = () => {
    setOpen(false);
    body.style = `overflow-y:auto`;
  };
  return (
    <>
      <header>
        <img src={Logo} alt="" />
        <div className="wrapper">
          <Link to="/">Home</Link>
          <Link to="/place-to-stay">Place to stay</Link>
          <Link to="/">NFTs</Link>
          <Link to="/">Community</Link>
        </div>
        <button onClick={showModal}>Connect Wallet</button>
      </header>
      <Modal show={open} handleClose={closeModal} />
    </>
  );
};

export default Header;
