import React, { useState, useRef } from "react";
import { Logo } from "../../assets/images/";
import { Link } from "react-router-dom";
import "./header.scss";
import Modal from "../modal/Modal";
const Header = () => {
  const [open, setOpen] = useState(false);

  const checkbox = useRef();
  const body = document.querySelector("body");

  const nav = () => {
    checkbox.current.checked = false;
  };

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
        <div>
          <input
            type="checkbox"
            ref={checkbox}
            id="main-navigation-toggle"
            className="btn btn--close"
            title="Toggle main navigation"
          />
          <label for="main-navigation-toggle">
            <span></span>
          </label>

          <nav id="main-navigation" className="nav-main">
            <ul className="menu">
              <li className="menu__item">
                <Link to="/" className="menu__link" onClick={nav}>
                  Home
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/place-to-stay" className="menu__link" onClick={nav}>
                  Place to stay
                </Link>
              </li>
              <li className="menu__item">
                <span className="menu__link" onClick={nav}>
                  NFts
                </span>
              </li>
              <li className="menu__item">
                <span className="menu__link" onClick={nav}>
                  Community
                </span>
              </li>
              <li className="menu__item">
                <span
                  className="menu__link mobile_wallet"
                  onClick={() => {
                    nav();
                    showModal();
                  }}
                >
                  Connect Wallet
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="wrapper">
          <Link to="/">Home</Link>
          <Link to="/place-to-stay">Place to stay</Link>
          <Link to="/">NFTs</Link>
          <Link to="/">Community</Link>
        </div>
        <button className="wallet" onClick={showModal}>
          Connect Wallet
        </button>
      </header>
      <Modal show={open} handleClose={closeModal} />
    </>
  );
};

export default Header;
