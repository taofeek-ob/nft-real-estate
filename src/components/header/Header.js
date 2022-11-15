import React, { useState, useRef } from "react";
import { Logo } from "../../assets/images/";
import { Link } from "react-router-dom";
import "./header.scss";
import Modal from "../modal/Modal";
const Header = () => {
  const [open, setOpen] = useState(false);
  // const [check, setCheck] = useState(false);
  const checkbox = useRef();
  const body = document.querySelector("body");

  const nav = () => {
    // setCheck(!check);
    checkbox.current.checked = false;
  };

  // if ((checkbox.current.checked = true)) {
  //   body.style = `overflow-y:hidden`;
  // }
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
            // checked={check}
            // onChange={(e) => setCheck(!check)}
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
                <a className="menu__link" href="#0" onClick={nav}>
                  NFts
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#0" onClick={nav}>
                  Community
                </a>
              </li>
            </ul>
          </nav>
        </div>

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
